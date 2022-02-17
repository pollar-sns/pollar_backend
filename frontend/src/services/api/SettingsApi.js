import { getLoggedUserId } from '../../utils/loggedUser';
import instance from '../axiosInstance';

const COMMON = '/setting';

/* 유저 알림 설정 상태 확인 */
export const getNotificationSetting = async () => {
  const response = await instance.get(COMMON + '/info', {
    params: { userId: getLoggedUserId() },
  });
  return response.data;
};

/* 유저 알림 설정 상태 확인 */
export const setNotificationOn = async () => {
  const userInfo = { userId: getLoggedUserId() };
  const response = await instance.put(COMMON + '/allon', userInfo);
  return response.data;
};

/* 유저 알림 설정 상태 확인 */
export const setNotificationOff = async () => {
  const userInfo = { userId: getLoggedUserId() };
  const response = await instance.put(COMMON + '/alloff', userInfo);
  return response.data;
};
