import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

export default function FollowAccountList() {
  const [checked, setChecked] = useState([1]);

  // useHistory hook gives you access to the history instance that you may use to navigate
  let navigate = useNavigate();

  /* 사용자 프로필을 클릭했을 시 해당 사용자의 프로필로 이동 */
  const handleAccountClick = (userId) => {
    console.log(userId);
    navigate(`../profile/${userId}`, { replace: true });
  };

  /* 팔로우/언팔로우 버튼 클릭 */
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '100%',
        height: 650,
        overflow: 'auto',
        bgcolor: 'background.paper',
      }}
      // dense
    >
      {[0, 1, 2, 3, 4, 5, 6, 45, 7, 234, 9].map((value, index) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              index % 2 == 0 ? (
                <Button variant="contained" color="secondary" size="small">
                  Follow
                </Button>
              ) : (
                <Button size="small">Unfollow</Button>
              )
            }
            disablePadding
            onClick={() => handleAccountClick(value)}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
              <ListItemText
                id={labelId}
                primary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    닉네임 {value}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="caption"
                      color="text.disabled"
                    >
                      @아이디{value}
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
