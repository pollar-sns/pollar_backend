import { Icon } from '@iconify/react';
import { useState } from 'react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Drawer
} from '@mui/material';
// ----------------------------------------------------------------------

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


const SearchStyle = styled('div')(({ theme }) => ({
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'relative',
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

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [isOpen, setOpen] = useState(false);

  const [option, setOption] = useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (e) => {
    const searchNick = e.target.value;
  };

  return (
    // <ClickAwayListener onClickAway={handleClose}>

    <Stack>
      {!isOpen && (
        <IconButton onClick={handleOpen}>
          <Icon icon={searchFill} width={20} height={20} />
        </IconButton>
      )}
      <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
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
                <MenuItem value={10}>유저검색</MenuItem>
                <MenuItem value={20}>피드검색</MenuItem>
                <MenuItem value={30}>카테고리검색</MenuItem>
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
          <Button variant="contained" onClick={handleClose}>
            Search
          </Button>
        </SearchbarStyle>
      </Slide>

    </Stack>

    /* // </ClickAwayListener> */
  );
}
