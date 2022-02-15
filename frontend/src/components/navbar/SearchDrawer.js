import { useState } from 'react';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import {
  Box,
  Input,
  Card,
  Grid,
  Typography,
  Avatar,
  Button,
  InputAdornment,
  ClickAwayListener,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Drawer,
  List,
  Divider,
  ListItem,
} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, alpha } from '@mui/material/styles';
import {
  getUserSearchPage,
  getUserSearchBar,
  getFeedSearchBar,
} from '../../services/api/SearchApi';
import { useEffect } from 'react';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

//------------------------------------------------------------
export default function SearchDrawer(user) {
  // api data
  const [param, setParam] = useState({
    userId: '',
    searchInfo: '',
  });
  // 검색 옵션
  const [option, setOption] = useState('');
  // open
  const [state, setState] = useState({
    top: false,
  });
  console.log(option);
  //옵션 선택
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  //검색바 정보
  const [searchList, setSearchList] = useState([]);

  //검색어
  const handleInput = (e) => {
    setParam({
      userId: user.user.userId,
      searchInfo: e.target.value,
    });
  };

  //검색한 결과 페이지 이동
  const handleSearch = async () => {
    console.log(param);
    if (option === 1) {
      const data = await getUserSearchPage(param);
      console.log(data);
    }

    toggleDrawer('top', false);
  };

  //검색바
  const getUserList = async () => {
    if (option === 1) {
      const data = await getUserSearchBar(param);
      console.log(data.searchList)
      setSearchList(data.searchList);
    } else if (option === 2) {
      const data = await getFeedSearchBar(param);
      setSearchList(data.feedList);
      console.log(searchList)
    }
  };

  console.log(searchList)
  useEffect(() => {
    getUserList();
    
  }, [param.searchInfo]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const userlist = () => (
    <>
      {true && (
        <>
          {searchList.map((user, index) => (
            // <Grid xs={3} justify="center" align="center" key={index}>
            <Button
              sx={{ width: 'auto', marginTop: 2 }}
              href={`users/profile/${user.userId}`}
              key={index}
            >
              <Avatar
                src={user.userProfilePhoto}
                alt="Profile Photo"
                shadow="xl"
                sx={{
                  width: '2rem',
                  height: '2rem',
                  border: 1,
                  borderColor: '#c5cae9',
                }}
              />
              <Typography component="span" variant="overline">
                &nbsp;&nbsp;{user.userNickname}
              </Typography>
              <Typography component="span" variant="caption" color="text.secondary">
                &nbsp;&nbsp;@{user.userId}
              </Typography>
            </Button>
            // </Grid>
          ))}
        </>
      )}
    </>
  );
  const feedlist = () => (
    <>
      {searchList.length > 0 && (
        <>
          {searchList.map((vote, index) => (
            // <Grid xs={3} justify="center" align="center" key={index}>
            <Button
            sx={{ width: 'auto', marginTop: 2 }}
            href={`polls/detail/${vote.userId}`}
            key={index}
            >
              <Stack>
              <Avatar
                src={vote.userProfilePhoto}
                alt="Profile Photo"
                shadow="xl"
                sx={{
                  width: '2rem',
                  height: '2rem',
                  border: 1,
                  borderColor: '#c5cae9',
                }}
              />
              <Typography component="span" variant="caption" color="text.secondary">
                &nbsp;&nbsp;{user.voteName}
              </Typography>
              </Stack>
              <Typography component="span" variant="overline">
                &nbsp;&nbsp;{vote.voteName}
              </Typography>
            </Button>
            // </Grid>
          ))}
        </>
      )}
    </>
  );

  return (
    <Stack>
      {/* <Button onClick={toggleDrawer('top', true)}>Top</Button> */}
      <IconButton onClick={toggleDrawer('top', true)}>
        <Icon icon={searchFill} width={20} height={20} />
      </IconButton>
      <Drawer anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
        <Box
          sx={{ width: 'auto', height: 80 }}
          role="presentation"
          onClick={toggleDrawer('top', false)}
          onKeyDown={toggleDrawer('top', false)}
        ></Box>
        <SearchbarStyle>
          <Box sx={{ width: 150, padding: 2 }}>
            <FormControl fullWidth>
              <InputLabel>검색설정</InputLabel>
              <Select
                // labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                onChange={handleChange}
                placeholder="검색설정"
              >
                <MenuItem value={1}>유저검색</MenuItem>
                <MenuItem value={2}>피드검색</MenuItem>
                <MenuItem value={3}>카테고리검색</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Input
            autoFocus
            fullWidth
            disableUnderline
            placeholder="Search…"
            startAdornment={
              <InputAdornment position="start">
                <Box
                  component={Icon}
                  icon={searchFill}
                  sx={{ color: 'text.disabled', width: 20, height: 20 }}
                />
              </InputAdornment>
            }
            sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            onChange={handleInput}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </SearchbarStyle>
        {option === 1 ? <>{userlist()}</> : <>{feedlist()}</>}
      </Drawer>
    </Stack>
  );
}
