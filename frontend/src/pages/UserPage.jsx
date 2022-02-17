import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';
import { checkUserLogged, getLoggedUserId } from '../utils/loggedUser';
import { getAllUsers } from '../services/api/SearchApi';
import UserDetailCard from '../components/user/UserDetailCard';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedState } from '../atoms/atoms';

function UserPage() {
  // 로그인되어있는 사용자의 Id
  const loggedUserId = getLoggedUserId();
  const [userInfo, setUserInfo] = useState([]);
  // 로그인된 사용자인지 여부
  const isLogged = useRecoilValue(isLoggedState);
  const navigate = useNavigate();

  //전체 유저 불러오기
  const getAllUserInfo = async () => {
    const data = await getAllUsers(loggedUserId);
    setUserInfo(data.allUserList);
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
    if (!isLogged && !checkUserLogged()) {
      handleClickOpen();
    } else {
      getAllUserInfo();
    }
  }, [loggedUserId]);

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

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Card
          sx={{
            px: 14,
            py: 2,
            backgroundColor: '#fffd',
            backdropFilter: 'saturate(200%) blur(30px)',
            boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'visible',
            height: 'auto',
            bgcolor: '#f1f3fa',
            flexGrow: 1,
          }}
        >
          <Typography variant="h3" gutterBottom color="primary">
            Pollar Members
          </Typography>
          <Grid container spacing={2}>
            {userInfo.map((user, index) => (
              <UserDetailCard key={index} user={user} />
            ))}
          </Grid>
        </Card>
      </Box>
    </>
  );
}

export default UserPage;
