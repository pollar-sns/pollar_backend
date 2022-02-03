import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// api
import { login } from '../../services/api/AuthApi';
import { useSetRecoilState } from 'recoil';
import { loggedUserState } from '../../atoms/atoms';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const setLoggedUserState = useSetRecoilState(loggedUserState);

  const LoginSchema = Yup.object().shape({
    userId: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      // alert(JSON.stringify(values, null, 2));
      // await login(values);
      await handleLogin(values);
      // navigate('/', { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async (loginInfo) => {
    try {
      const result = await login(loginInfo);
      console.log(result);
      if (result.message == 'success') {
        // 로그인 성공한 userId와, response로 온 userNickname을 atom에 저장
        setLoggedUserState({
          userId: loginInfo.userId,
          userNickname: result.userNickname,
        });
        //// navigate('/');
        navigate('/', { replace: true });
      } else {
        // todo 에러처리들
        alert('로그인에 실패하였습니다');
      }
    } catch (error) {
      // todo 에러처리들
      alert('로그인에 실패하였습니다');
    }
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="userId"
            label="Username"
            {...getFieldProps('userId')}
            error={Boolean(touched.userId && errors.userId)}
            helperText={touched.userId && errors.userId}
            value={formik.values.userId}
            onChange={formik.handleChange}
            // onChange={(userId) => {
            //   setUserId(userId.target.value);
            // }}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}

            // onChange={(password) => {
            //   setPassword(password.target.value);
            // }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
