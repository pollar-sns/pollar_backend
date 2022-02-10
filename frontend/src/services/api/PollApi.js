import { fileInstance, instance, instanceWithAuth } from '../../services/axios';
const COMMON = '/vote';


// create vote
// Text vote
export const voteCreate = async (form) => {
  const response = await instance
    .post(COMMON + '/create', form)

    .then((response) => {
      return response.data
    })
    .catch((error)=> {
      // alert('작성 실패 ')
    })
};


export const voteImageCreate = async (form) => {
  console.log(form)
  const response = await instance
    .post(COMMON + '/create', form,{
      headers: {
        'Content-Type': 'multipart/form-data'
      } 
    })
    .then((response) => {
      return response.data
    })
    .catch((error)=> {
      alert('작성 실패 ')
    })
};

