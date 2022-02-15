import {
  createIntstanceWithAuth,
  fileInstance,
  instance,
  instanceWithAuth,
} from '../../services/axios';
const COMMON = '/reply';

// 댓글 받아오기
export const getRelies = async (voteId) => {
  // voteId를 pathvariable로 보내서 vote dto를 받아옴
  const response = await createIntstanceWithAuth().get(COMMON + `/${voteId}`, {
    params: {
      voteId,
    },
  });
  return response.data;
};

// 댓글 작성
export const replyCreate = async (replyDto) => {
  const response = await createIntstanceWithAuth().post(COMMON + '/create', replyDto);
  return response.data;
};

// 댓글 삭제
export const replyDelete = async (replyId) => {
  const response = await createIntstanceWithAuth().delete(COMMON + `/${replyId}`, {
    params: {
      replyId,
    },
  });
  return response.data;
};

// 댓글 수정
export const replyUpdate = async (replyDto) => {
  const response = await createIntstanceWithAuth().put(COMMON, replyDto);
  return response.data;
};
