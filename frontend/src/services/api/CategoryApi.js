import { instance } from '../../services/axios';

const COMMON = '/category';

/* 모든 카테고리 리스트 */
export const getAllCategories = async () => {
  const response = await instance.get(COMMON);
  console.log(response.data)
  return response.data;
};

/* 유저가 선택한 카테고리 목록 반환 */
export const getUserCategories = async (userId) => {
  const response = await instance.get(COMMON + `/user/${userId}`);
  console.log(response);
  return response.data;
};

/*  */
