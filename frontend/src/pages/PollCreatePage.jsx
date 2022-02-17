import CreateForm from '../components/createpoll/CreateForm';
import { isLoggedState } from '../atoms/atoms';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@mui/material';
import { checkUserLogged, getLoggedUserId } from '../utils/loggedUser';

export default function PollCreatePage() {
  // 로그인된 사용자만 사용가능 (recoil state watch하자)
  const isLogged = useRecoilValue(isLoggedState);
  const navigate = useNavigate();
  // alert
  // 로그인 알림
  const [loginOpen, setLoginOpen] = useState(false);

  const handleClickOpen = () => {
    setLoginOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
    navigate('/users/login');
  };
  useEffect(() => {
    if (!isLogged && !checkUserLogged()) {
      handleClickOpen()
      
    }
  }, []);
  

  return (
    <>
      <Dialog
        open={loginOpen}
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
      <Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Card
            sx={{
              px: 14,
              py: 8,
              backgroundColor: '#fffd',
              backdropFilter: 'saturate(200%) blur(30px)',
              boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
              overflow: 'visible',
            }}
          >
            <Typography variant="h3" gutterBottom color="primary">
              Create Poll
            </Typography>
            <CreateForm />
          </Card>
        </Box>
      </Container>
    </>
  );
}
