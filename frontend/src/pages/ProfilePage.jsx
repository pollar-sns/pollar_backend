import Container from '@mui/material/Container';

import { Box, Card, Dialog, DialogActions, DialogTitle, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FeedTabs from '../components/profile/FeedTabs';
import Profile from '../components/profile/Profile';
import { getProfileInfo } from '../services/api/ProfileApi';
import { checkUserLogged, getLoggedUserId } from '../utils/loggedUser';
import { getTotalUploadsCount, getTotalVotesCount } from '../services/api/PollApi';
import { useRecoilValue } from 'recoil';
import { isLoggedState } from '../atoms/atoms';

const style = {
  p: 2,
  mx: { xs: 2, lg: 3 },
  mt: 6,

  backgroundColor: '#fff6',

  backdropFilter: 'saturate(200%) blur(30px)',

  boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'visible',
};

export default function ProfilePage() {
  // 로그인된 사용자만 사용가능 (recoil state watch하자)
  const isLogged = useRecoilValue(isLoggedState);
  const navigate = useNavigate();

  let { userId } = useParams();
  const [profileId, setProfileId] = useState(userId);

  // 로그인되어있는 사용자의 Id
  const loggedUserId = getLoggedUserId();
  // 사용자 계정 정보
  const [profileInfo, setProfileInfo] = useState();
  // 사용자 본인의 계정 여부
  const [isOwnerAccount, setIsOwnerAccount] = useState(false);
  // 화면 refresh
  const [triggerRefresh, setTriggerRefresh] = useState(false);

  const checkIfOwnerAccount = () => {
    if (typeof userId === 'undefined' || (loggedUserId && loggedUserId === userId)) {
      if (loggedUserId) {
        userId = loggedUserId;
        setProfileId(loggedUserId);
        setIsOwnerAccount(true);
      } else {
      }
    } else setIsOwnerAccount(false);
  };

  /* 사용자 계정 프로필 정보 API 호출 */
  const getAccountProfileInfo = async () => {
    const data = await getProfileInfo(userId);

    // 사용자 총 업로드 수
    data.totalPollCount = await getTotalUploadsCount(userId);
    // 사용자 총 투표 수
    data.totalVoteCount = await getTotalVotesCount(userId);

    setProfileInfo(data);
  };

  // 로그인 알림
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/users/login');
  };

  useEffect(() => {
    // 로그인된 사용자인지 검사
    if (!isLogged && !checkUserLogged()) {
      handleClickOpen();
    }
    setProfileId(userId);
    checkIfOwnerAccount();
    // 사용자 계정정보 요청
    getAccountProfileInfo();
  }, [userId, triggerRefresh]);

  return (
    <>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="body1" textAlign="center">
            회원에게만 제공되는 서비스입니다. <br />
            로그인 화면으로 이동합니다.
          </Typography>
        </DialogTitle>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Box bgColor="white">
        <Container>
          <Card sx={style}>
            {/* isOwnerAccount - 사용자 본인의 프로필: true, 다른 사용자의 프로필: false */}
            <Profile
              profileInfo={profileInfo}
              isOwnerAccount={isOwnerAccount}
              setTriggerRefresh={setTriggerRefresh}
            />
            <Box bgColor="white" minHeight="60vh">
              <FeedTabs userId={profileId} />
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
