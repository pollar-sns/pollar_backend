import { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { getLoggedUserId, getLoggedUserInfo, getLoggedUserPhoto } from '../../utils/loggedUser'
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  getTouchRippleUtilityClass,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { signup } from '../../services/api/AuthApi';

import tododo from '../../assets/images/profile.jpeg';
import { getUserInfo } from '../../services/api/UserApi';

import {
  checkId,
  checkNickname,
  checkEmail,
  emailConfirm,
  emailToken,
  modifyUserInfo,
  modifyUserPw
} from '../../services/api/UserApi';
import ImageUploadButton from '../common/ImageUploadButton';

// ----------------------------------------------------------------------

export default function ProfileInfoSettings() {
  const loggedUserId = getLoggedUserId();
  const loggedUser = getLoggedUserInfo();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // yyyy-mm-dd로 변경
  // let convertedDate = convertDateFormat(loggedUser.userBirthday)
  // console.log("================생일 타입 변경========================")
  // console.log(typeof loggedUser.userBirthday) string 타입
  let year = loggedUser.userBirthday.slice(0,4)
  // console.log(year)
  let month = loggedUser.userBirthday.slice(5, 7)
  // console.log(month)
  let day = loggedUser.userBirthday.slice(8, 10)
  // console.log(day)
  let birthday = [year, month, day].join('-')
  // console.log(birthday)
  // console.log("========================================")

  const [user, setUser] = useState({
    userId: loggedUser.userId,
    password: '',
    userNickname: loggedUser.userNickname,
    userEmail: loggedUser.userEmail,
    userBirthday: birthday,
    userGender: loggedUser.userGender,
    categories: [],
    userProfilePhoto: loggedUser.userProfilePhoto,
  });

  // error State
  const [errorState, setErrorState] = useState({
    UserIdRegex: false,
    UserIdUnique: false,
    nickNameRegex: false,
    nickNameUnique: false,
    passwordRegex: false,
    passwordConfirm: false,
    emailRegex: false,
    emailUnique: false,
  });

  // error Message
  const errorMsg = {
    IDRegex: '숫자와 영문 조합으로 6~16자까지 가능합니다.',
    IDUnique: '중복되는 아이디가 있습니다.',
    IDUniqueTrue: '유효한 아이디입니다.',
    nicknameRegex: '한글,영어,숫자 조합으로 2~16자 까지 가능하며 특수문자는 불가능합니다.',
    nicknameUnique: '중복되는 닉네임이 있습니다.',
    passwordRegex: '영어, 숫자, 특수문자를 최소 한개씩 포함하며 4~12자까지 가능합니다.',
    passwordConfirm: '비밀번호가 일치하지 않습니다',
    emailRegex: '이메일 형식으로 입력해주세요.',
    emailUnique: '중복되는 이메일이 있습니다. ',
  };


  // userNickname Validation
  const checkNickValid = (nickname) => {
    var checkNick = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,15}$/.test(loggedUser.userNickname);
    if (!checkNick) {
      setErrorState({
        ...errorState,
        nickNameRegex: true,
      });
    } else {
      setErrorState({
        ...errorState,
        nickNameRegex: false,
      });
    }
  };

  const checkOriginNick = (nickname) => {
    if(nickname == loggedUser.userNickname) {
      return true;
    } else {
      return false;
    }
  }

  // userNickname duplicate check
  const checkNickUnique = async (nick) => {
    const result = await checkNickname(nick);
    const sameOriginNick = await checkOriginNick(nick)
    // console.log(result)
    if (result || sameOriginNick) {
      setErrorState({
        ...errorState,
        nickNameUnique: false,
      });
      // alert('사용 가능한 닉네임입니다!');
    } else {
      setErrorState({
        ...errorState,
        nickNameUnique: true,
      });
    }
  };

  // password confirm
  // 비밀번호는 그냥 수정으로 보내기. null값으로 잡은 다음에 setState로 변경해서 modify 전송
  const checkPwValid = (e) => {
    var checkpw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/.test(
      user.password
    );
    // console.log(checkpw)
    if (!checkpw) {
      setErrorState({
        ...errorState,
        passwordRegex: true,
      });
    } else {
      setErrorState({
        ...errorState,
        passwordRegex: false,
      });
    }
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`변경된 닉네임: ${user.userNickname}`);
    alert(`변경된 패스워드: ${user.password}`);
    modifyUserPw(user)
    modifyUserInfo(user)
    navigate('/', { replace: true });
  };

  return (
    <>
      {/* 한주님 작업공간: 프로필사진 / 닉네임 / 비밀번호 2가지만 변경가능
      <br /> - 비밀번호 확인 방식?
      <br /> - 회원탈퇴 추가
      <br /> - 아래코드 다 삭제하고 하시면 됩니다! (예전 회원가입코드에서 단순 복붙해온 것) */}
      {/* 아이디, 닉네임, 사진, 이메일,  */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {/* 아이디는 수정 불가 */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              disabled
              fullWidth
              autoComplete="userId"
              type="text"
              label="userId"
              value={loggedUserId}
            />
          </Stack>
          {/* 이메일 */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              disabled
              fullWidth
              autoComplete="email"
              type="email"
              label="Email address"
              value={loggedUser.userEmail}
            />
          </Stack>
          {/* 닉네임 */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              required
              fullWidth
              autoComplete="userNickname"
              type="text"
              label="Nickname"
              value={user.userNickname}
              onChange={(e) =>
                setUser({
                  ...user,
                  userNickname: e.target.value,
                })
              }
              onKeyUp={(e) => checkNickValid(e.target.value)}
              onBlur={(e) => checkNickUnique(e.target.value)}
              // UserIdRegex가 true. -> 유효하지 않다
              error={
                errorState.nickNameRegex ? errorState.nickNameRegex : errorState.nickNameUnique
              }
              helperText={
                errorState.nickNameRegex
                  ? errorMsg.nicknameRegex
                  : errorState.nickNameUnique && errorMsg.nicknameUnique
              }
            />
          </Stack>
          {/* 비밀번호 그냥 적고 수정 */}
          <TextField
            required
            fullWidth
            autoComplete="password"
            type={showPassword ? 'text' : 'password'}
            label="비밀번호"
            value={user.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            onBlur={(e) => checkPwValid(e)}
            error={errorState.passwordRegex}
            helperText={errorState.passwordRegex && errorMsg.passwordRegex}
          />
          {/* 생일 / 성별 */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              disabled
              id="date"
              type="date"
              sx={{ width: 200 }}
              value={birthday}
              InputLabelProps={{
                shrink: true,
                required: true,
              }}
            />
            <FormLabel id="gender-radio-group">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={loggedUser.userGender}
            >
              <FormControlLabel value={false} control={<Radio />} label="Male" />
              <FormControlLabel value={true} control={<Radio />} label="Female" />
            </RadioGroup>
            <ImageUploadButton />
          </Stack>
          {
          !user.password ||
          !user.userNickname ? (
            <Button>필수 항목을 모두 작성해주세요</Button>
          ) 
          : (
            <Button fullWidth size="large" variant="contained" type='submit' >
              정보 수정
            </Button>
          )}
        </Stack>
      </form>
    </>
  );
}


