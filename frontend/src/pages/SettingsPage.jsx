import {
  Box,
  Card,
  Container,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import SettingsVerticalTab from '../components/settings/SettingsVerticalTab';
import { isLoggedState } from '../atoms/atoms';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { checkUserLogged, getLoggedUserId } from '../utils/loggedUser';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 880,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 0),
}));

export default function SettingsPage() {
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
      // todo
      handleClickOpen();
    }
  }, []);

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
      <Container>
        <ContentStyle>
          <Box sx={{ ml: 2, mb: 5 }}>
            <Typography variant="h3" gutterBottom color="primary">
              Account Settings
            </Typography>
          </Box>
          <Card
            sx={{
              backgroundColor: '#fffd',
              backdropFilter: 'saturate(200%) blur(50px)',
              boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
              overflow: 'visible',
            }}
          >
            <SettingsVerticalTab />
          </Card>
        </ContentStyle>
      </Container>
    </>
  );
}
