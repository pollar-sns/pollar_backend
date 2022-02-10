import React, { useState } from 'react';

import SignupForm from './SignupForm';
import InterestForm from './InterestForm';

function Index() {
  const [next, setNext] = useState(false);
  const [user, setUser] = useState({
    userId: '',
    password: '',
    userNickname: '',
    userEmail: '',
    userBirthday: '',
    userGender: false,
    categories: [],
    userProfilePhoto: '',
  });

  return (
    <>
      {next ? (
        <InterestForm setNext={setNext} setUser={setUser} user={user} />
      ) : (
        <SignupForm setNext={setNext} setUser={setUser} user={user} />
      )}
    </>
  );
}

export default Index;
