import { instance, instanceWithAuth } from '../../services/axios';

// 공통되는 경로는 다음과 같이 별도로 정의해둠? (is this nesassary)
const USER = '/user/';

/* 회원가입 */
export const signup = (userData) => {
  // return instance.post('/user/sign')
  return instance.post(USER + 'signup', userData).then((response) => {
    console.log(response);
  });
};

/* 로그인 */
export const login = async (userData) => {
  const response = await instance.post('/user/login', userData);
  if (response.data['access-token']) {
    // save JWT token
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

/* 로그아웃 */
export const logout = () => {
  // remove JWT from LocalStorage
  localStorage.removeItem('user');
};
