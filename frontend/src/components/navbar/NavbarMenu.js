import styled from '@emotion/styled';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarMenu() {
  const [click, setClick] = useState(false);
  return (
    <>
      <Stack direction="row" spacing={1}>
        {/* <ListItem> */}
        <ListSubheader>
          <Link to="/about">About</Link>
        </ListSubheader>
        <ListItemButton>
          <Link to="/trending" underline="none">
            Trending
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/polls" underline="none">
            Polls
          </Link>
        </ListItemButton>
        {/* </ListItem> */}
      </Stack>
      {/* <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon> */}

      {/* <NavMenu onClick={handleClick} click={click}>
        <NavItem>
          <NavLinks to="/about" onClick={closeMobileMenu}>
            About
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/trending" onClick={closeMobileMenu}>
            Trending
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/polls" onClick={closeMobileMenu}>
            Polls
          </NavLinks>
        </NavItem>
      </NavMenu> */}
      {/* </Stack> */}
    </>
  );
}
