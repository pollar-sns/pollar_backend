import DatePicker from './DatePicker';
import {
  Box,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Modal,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import CategoryModal from './CategoryModal';
import React from 'react';

function BasicForm(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #333',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  const { vote, setVote } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Stack spacing={1}>
          <Typography variant="h4" paddingTop={1}>
            투표 제목
          </Typography>
          <TextField
            id="voteName"
            variant="standard"
            required
            fullWidth
            placeholder="투표 제목을 입력하세요."
            value={vote.voteName}
            onChange={(e) =>
              setVote({
                ...vote,
                voteName: e.target.value,
              })
            }
          />{' '}
        </Stack>
        <Stack spacing={1} paddingTop={2}>
          <Typography variant="h4" paddingTop={1}>
            투표 내용
          </Typography>
          <TextField
            id="voteContent"
            placeholder="투표 내용을 입력하세요 "
            multiline
            fullWidth
            rows={4}
            variant="standard"
            required
            value={vote.voteContent}
            onChange={(e) =>
              setVote({
                ...vote,
                voteContent: e.target.value,
              })
            }
          />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={6} paddingTop={2} paddingBottom={2}>
          <Button onClick={handleOpen}>카테고리 선택</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CategoryModal />
            </Box>
          </Modal>

          <DatePicker vote={vote} setVote={setVote} />
        </Stack>
        <hr></hr>
        <Stack paddingTop={2}>
          <Typography variant="h4" paddingBottom={1}>
            투표 익명 옵션 선택
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FormControlLabel
              label="익명으로 투표 생성하기 (투표 생성자와 투표자 모두 익명)"
              control={
                <Checkbox
                  checked={vote.userAnonymousType}
                  onChange={(e) => {
                    setVote({
                      ...vote,
                      userAnonymousType: e.target.checked,
                    });
                  }}
                />
              }
            />
            <br />
            <FormControlLabel
              label="투표자만 익명으로 (투표자만 익명)"
              control={
                <Checkbox
                  checked={vote.voteAnonymousType}
                  onChange={(e) => {
                    setVote({
                      ...vote,
                      voteAnonymousType: e.target.checked,
                    });
                  }}
                />
              }
            />
          </Stack>
        </Stack>
        <br />
        <hr></hr>
        <Typography variant="h4" paddingTop={1} paddingBottom={1}>
          투표 타입 선택
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={vote.voteType}
          onChange={(e) =>
            setVote({
              ...vote,
              voteType: e.target.value,
            })
          }
        >
          <FormControlLabel value={true} control={<Radio />} label="텍스트 투표" />
          <FormControlLabel value={false} control={<Radio />} label="이미지 투표" />
        </RadioGroup>
      </Box>
    </>
  );
}

export default BasicForm;
