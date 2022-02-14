import {
  createIntstanceWithAuth,
  fileInstance,
  instance,
  instanceWithAuth,
} from "../../services/axios";
const COMMON = "/reply";

export const getRelies = async (voteId) => {
  // voteId를 pathvariable로 보내서 vote dto를 받아옴
  const response = await createIntstanceWithAuth().get(COMMON + `/${voteId}`, {
    params: {
      voteId,
    },
  });
  return response.data;
};
