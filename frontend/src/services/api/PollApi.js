import {
  createIntstanceWithAuth,
  fileInstance,
  instance,
  instanceWithAuth,
} from "../../services/axios";
const COMMON = "/vote";

// create vote
// Text vote
export const voteCreate = async (form) => {
  const response = await instance
    .post(COMMON + "/create", form)

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // alert('작성 실패 ')
    });
};

export const voteImageCreate = async (form) => {
  console.log(form);
  const response = await instance
    .post(COMMON + "/create", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert("작성 실패 ");
    });
};

export const getVoteInfo = async (voteId) => {
  // voteId를 pathvariable로 보내서 vote dto를 받아옴
  const response = await createIntstanceWithAuth().get(COMMON + `/${voteId}`, {
    params: {
      voteId,
    },
  });
  return response.data;
};
