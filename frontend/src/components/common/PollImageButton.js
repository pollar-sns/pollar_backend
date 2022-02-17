import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { cancelPollVote, requestPollVote } from '../../services/api/PollApi';
import { useEffect } from 'react';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 200,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.4,
    },
    '& .MuiImageMarked-root': {
      opacity: 1,
    },
    '& .MuiTypography-root': {},
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

const ImageVoteResult = styled('span')(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  fontSize: 16,
  borderRadius: 14,
  backgroundColor: theme.palette.warning.main,
  opacity: 0.7,
  transition: theme.transitions.create('opacity'),
}));

/**
 *
 * @param {selection, isVoted, voteResultPercentage, setPollVotedState} (순서대로) 투표선택지 데이터 / 투표완료된 투표인지 여부 / 이 선택지에 대한 퍼센티지 결과값(100)
 * @returns
 */
export default function PollImageButton({
  selection,
  isVoted,
  setPollVotedState,
  voteResultPercentage,
  isSelectedVote,
}) {
  // 현재 로그인된 사용자가 투표한 선택지
  const [userVote, setUserVote] = useState(isSelectedVote);

  // snackbar
  const [alert, setAlert] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });

  const { vertical, horizontal, open } = alert;
  // false 인 상태가 안한거 true 면 성공한거 true 일때 메시지가 나와야함
  const [alertState, setAlertState] = useState({
    voteSuccess: false,
    voteFail: false,
    cancleSuccess: false,
    cancleFail: false,
  });

  const alertMsg = {
    voteSuccess: '투표완료가 완료되었습니다!',
    voteFail: '투표하기에 문제 발생. 잠시 후 다시 시도해주세요',
    cancleSuccess: '투표가 취소되었습니다.',
    cancleFail: '투표 취소에 문제 발생. 잠시 후 다시 시도해주세요',
  };

  const openSuccessAlert = () => {
    setAlert({
      ...alert,
      open: true,
    });
  };
  const closeSuccessAlert = () => {
    setAlert({
      ...alert,
      open: false,
    });
    setAlertState({
      voteSuccess: false,
      voteFail: false,
      cancleSuccess: false,
      cancleFail: false,
    });
  };

  /* 투표하기 */
  // 투표 선택지 클릭 시, 투표하기
  const handleClick = async () => {
    //// (디자인을 위해 선택한 항목일 경우 disabled를 해제해놔서 별도의 처리 필요)
    /* 투표하기 */
    if (!userVote) {
      // 서버로 해당 선택 데이터 전송
      const result = await requestPollVote(selection.selectionId);
      if (result === 'success') {
        setAlertState({
          ...alertState,
          voteSuccess: true,
        });
        openSuccessAlert();
        setPollVotedState(true);
        setUserVote(true);
      } else {
        setAlertState({
          ...alertState,
          voteFail: true,
        });
        openSuccessAlert();
        setPollVotedState(false);
        setUserVote(false); // (필요없나)
      }
    }
    /* 투표 취소 */
    // 사용자가 투표한 항목을 다시 눌렀을 때 취소 처리
    else {
      setAlertState({
        ...alertState,
        cancleSuccess: true,
      });
      openSuccessAlert();
      const result = await cancelPollVote(selection.selectionId);
      if (result === 'success') {
        setPollVotedState(false);
        setUserVote(false);
      } else {
        setAlertState({
          ...alertState,
          cancleFail: true,
        });
        openSuccessAlert();
      }
    }
  };

  return (
    <>
      {alertState.voteSuccess ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={closeSuccessAlert}
          message={alertMsg.voteSuccess}
          autoHideDuration={2000}
        />
      ) : alertState.voteFail ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={closeSuccessAlert}
          message={alertMsg.voteFail}
          autoHideDuration={2000}
        />
      ) : alertState.cancleSuccess ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={closeSuccessAlert}
          message={alertMsg.cancleSuccess}
          autoHideDuration={2000}
        />
      ) : (
        alertState.cancleFail && (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={closeSuccessAlert}
            message={alertMsg.closeFail}
            autoHideDuration={2000}
          />
        )
      )}
      <ImageButton
        focusRipple
        onClick={handleClick}
        // 투표완료 OR 마감된 투표일 경우 hover 막음
        disabled={isVoted && !userVote}
        color={userVote ? 'success' : 'primary'}
        style={{
          width: '100%',
          border: userVote ? '2px solid #999' : '',
          borderRadius: 15,
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${selection.content})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          {/* 투표 선택지 선택 시 결과 */}
          {isVoted ? (
            <ImageVoteResult sx={{ height: voteResultPercentage * 2 }}>
              <Typography variant="subtitle2" color="black" sx={{ paddingTop: 2 }}>
                {voteResultPercentage}%
              </Typography>
            </ImageVoteResult>
          ) : null}
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {/* 선택지 hover 효과 */}
            <ImageMarked className="MuiImageMarked-root">
              {isVoted ? '취소하기' : '투표하기'}
            </ImageMarked>
          </Typography>
        </Image>
      </ImageButton>
    </>
  );
}
