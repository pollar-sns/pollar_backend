import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function PollTextOptions(props) {
  const { vote, setVote } = props;

  const [imageList, setImageList] = useState([0]);

  const createimageList = (item) => {
    let voteArr = [...imageList];
    let counter = voteArr.slice(-1)[0];
    counter += 1;

    voteArr.push(counter);
    setImageList(voteArr);
  };

  const changeList = () => {
    setVote({
      ...vote,
      voteSelects: imageList,
    });
    console.log(vote.voteSelects);
  };

  return (
    <>
      {imageList &&
        imageList.map((item, i) => (
          <>
            <div>이미지 업로드 버튼 추가</div>
            <TextField
              paddingBottom={1}
              key={i}
              id="vote-list"
              label={`${i + 1}번 선택지`}
              required
              fullWidth
              placeholder="투표 선택지 입력"
              onChange={(e) => {
                setVote({
                  ...vote,
                  imageList: (imageList[i] = e.target.value),
                });
                changeList();
              }}
            />
          </>
        ))}
      <br />
      <br />
      {imageList.length > 2 && (
        <Button
          onClick={(e) => {
            setVote({
              ...vote,
              imageList: imageList.pop(),
            });
          }}
        >
          Delete Options
        </Button>
      )}
      {imageList.length < 4 && (
        <Button variant="contained" className="option-button" onClick={createimageList}>
          + Add more options
        </Button>
      )}
    </>
  );
}

export default PollTextOptions;
