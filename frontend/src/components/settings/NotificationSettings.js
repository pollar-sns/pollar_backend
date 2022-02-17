import {
  Alert,
  Box,
  Collapse,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
} from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  getNotificationSetting,
  setNotificationOff,
  setNotificationOn,
} from '../../services/api/SettingsApi';

export default function NotificationSettings() {
  // 설정 성공적으로 반영 시 Alert
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  // const [notificationOn, setNotificationOn] = useState({나중에추가})
  const [totalNotificationOn, setTotalNotificationOn] = useState(true);
  // const [detailNotification111111On, setDetailNotification11111On] = useState(false);

  const getUserSettings = async () => {
    const data = await getNotificationSetting();
    // console.log(data.userNotificationState.allNotificationState);
    setTotalNotificationOn(data.userNotificationState.allNotificationState);
  };

  const handleTotalSettingChange = async () => {
    // console.log(totalNotificationOn);
    if (totalNotificationOn) {
      const result = await setNotificationOn();
      if (result === 'success') setOpenSuccessAlert(true);
    } else {
      const result = await setNotificationOff();
      if (result === 'success') setOpenSuccessAlert(true);
    }
  };

  useEffect(() => {
    getUserSettings();
  }, []);

  useEffect(() => {
    handleTotalSettingChange();
  }, [totalNotificationOn]);

  return (
    <Box mt={4} mb={8}>
      <Collapse in={openSuccessAlert}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenSuccessAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          variant="filled"
          sx={{ mb: 2 }}
        >
          성공적으로 반영되었습니다.
        </Alert>
      </Collapse>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              // value={totalNotificationOn}
              checked={totalNotificationOn}
              color="secondary"
              onChange={() => setTotalNotificationOn((curr) => !curr)}
            />
          }
          label="전체 알람설정"
        />
        {/* <FormControlLabel
          disabled={!totalNotificationOn}
          control={
            <Switch
              value={detailNotification111111On}
              color="secondary"
              checked={detailNotification111111On}
            />
          }
          label="전체알림설정되었을 경우 세부설정"
        /> */}
      </FormGroup>
    </Box>
  );
}
