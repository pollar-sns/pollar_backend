import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

function PollTextOptions(props) {
  const { vote, setVote } = props;

  const [textList, setTextList] = useState([0]);

  const createTextList = (item) => {
    let voteArr = [...textList];
    let counter = voteArr.slice(-1)[0];
    counter += 1;

    voteArr.push(counter);
    setTextList(voteArr);
  };

  const changeList = () => {
    setVote({
      ...vote,
      voteSelects: textList,
    });
  };

  return (
    <>
      <Typography variant="caption" paddingTop={1}>
        &nbsp;&nbsp;투표 선택지는 1~20자 까지 작성이 가능합니다.
      </Typography>{' '}
      <br />
      {textList.length < 4 && (
        <Button
          variant="contained"
          className="option-button"
          onClick={createTextList}
          sx={{ margin: 1 }}
        >
          + 선택지 추가하기
        </Button>
      )}
      {textList.length > 2 && (
        <Button
          onClick={(e) => {
            setVote({
              ...vote,
              textList: textList.pop(),
            });
          }}
        >
          - 선택지 삭제
        </Button>
      )}
      <br />
      {textList &&
        textList.map((item, i) => (
          <TextField
            key={i}
            id="vote-list"
            label={`${i + 1}번 선택지`}
            inputProps={{ maxLength: 20 }}
            required
            fullWidth
            margin="dense"
            placeholder="투표 선택지 입력"
            onChange={(e) => {
              setVote({
                ...vote,
                textList: (textList[i] = e.target.value),
              });
              changeList();
            }}
          />
        ))}
      <br />
      <br />
    </>
  );
}

export default PollTextOptions;
