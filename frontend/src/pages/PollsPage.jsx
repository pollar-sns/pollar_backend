import { styled } from '@mui/system';
import PollListTabs from '../components/polls/PollListTabs';
import Page from '../components/Page';
import {
  Card,
  Grid,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';
import GradAnimatedButton from '../components/common/GradAnimatedButton';
import UserProfileCard from '../components/user/UserProfileCard';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isLoggedState } from '../atoms/atoms';
import { checkUserLogged, getLoggedUserId } from '../utils/loggedUser';

const RootStyle = styled(Page)(({ theme }) => ({
  height: '72vh',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export default function PollsPage() {
  // 로그인된 사용자만 사용가능 (recoil state watch하자)
  const isLogged = useRecoilValue(isLoggedState);
  const navigate = useNavigate();

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
    if (!isLogged && !checkUserLogged()) {
      handleClickOpen();
    }
  }, []);

  return (
    <>
      {/* 다이얼로그  */}
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
      <RootStyle title="Polls">
        <Stack>
          <Typography variant="h3" color="primary">
            Polls
          </Typography>
          <GradAnimatedButton href="/polls/create" sx={{ width: 'max-content', mt: 2 }}>
            <Typography variant="subtitle2">&nbsp;+&nbsp;Create A Poll&nbsp;&nbsp;</Typography>
          </GradAnimatedButton>
          {!isLogged && !checkUserLogged() ? null : <UserProfileCard />}
        </Stack>
        <Grid
          container
          item
          justifyContent="center"
          flexDirection="column"
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <PollListTabs />
        </Grid>
      </RootStyle>
    </>
  );
}
