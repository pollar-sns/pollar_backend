import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { signup } from '../../actions/auth';
import { SignupContainer } from './Signup.elements';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required! (필수항목)
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email. (이메일 유효성검사)
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 6 || value.length > 16) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 6 and 16 characters. 영어와 숫자로만 구성되며 6~16자까지 가능, 아이디 중복 체크해야한다.
      </div>
    );
  }
};

const vnickname = (value) => {
  if (value.length < 2 || value.length > 16) {
    return (
      <div className="alert alert-danger" role="alert">
        한글, 영어, 숫자로 구성된 2~16자까지 가능, 특수문자는 불가능 닉네임 중복체크가 필요하다.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 4 || value.length > 12) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 4 and 12 characters. 영어,숫자,특수문자 최소 한 개 씩 포함하며 4~12자까지 가능하다.
      </div>
    );
  }
};

const Signup = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeNickname = (event) => {
    const nickname = event.target.nickname;
    setNickname(nickname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(signup(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <SignupContainer>
      <div className="col-md-12">
        <div className="card card-container">
          <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" />

          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Nickname</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nickname"
                    value={nickname}
                    onChange={onChangeNickname}
                    validations={[required, vnickname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </SignupContainer>
  );
};

export default Signup;
