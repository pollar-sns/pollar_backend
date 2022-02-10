//* Get Logged User info from localStorage

export function getLoggedUserId() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.userId) {
    return user.userId;
  } else {
<<<<<<< HEAD
    console.log("로그인 실패")
    // alert('로그인 필요');
    // alert('로그인 안된 사용자. 이 페이지에 접근불가');
  }
}

export function getLoggedUserPhoto() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.userId) {
    return user.userProfilePhoto;
  } else {
    console.log("프로필 사진 X")
=======
>>>>>>> 073aaf4d46d4cb613d479ee6e2b0f89772bdc951
    // alert('로그인 필요');
    // alert('로그인 안된 사용자. 이 페이지에 접근불가');
  }
}

export function getLoggedUserInfo() {
  const user = JSON.parse(localStorage.getItem('user'));
<<<<<<< HEAD
=======
  console.log(user);
>>>>>>> 073aaf4d46d4cb613d479ee6e2b0f89772bdc951
  return user;
}
