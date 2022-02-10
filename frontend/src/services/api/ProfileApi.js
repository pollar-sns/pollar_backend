<<<<<<< HEAD
import { getLoggedUserId } from '../../utils/loggedUser'
=======
import { getLoggedUserId } from '../../utils/loggedUser';
>>>>>>> 073aaf4d46d4cb613d479ee6e2b0f89772bdc951
import { createIntstanceWithAuth } from '../../services/axios';

// 공통되는 경로
const COMMON = '/profile';

/* 프로필 페이지 기본 유저 계정 정보 */
export const getProfileInfo = async (userId) => {
<<<<<<< HEAD
  // console.log(instanceWithAuth());
=======
>>>>>>> 073aaf4d46d4cb613d479ee6e2b0f89772bdc951
  const response = await createIntstanceWithAuth().post(COMMON + `/${userId}`, {
    profileUserId: userId,
    loginUserId: getLoggedUserId(),
  });
  return response.data;
};

/*categoryList: []
followerCount: 0
followingCount: 0
isFollow: false
userId: "정홍"
userNickname: "정홍진" */
