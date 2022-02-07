import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// components
import bgImage from '../assets/images/grad_img.png';
import { Container } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  //@eazae
  // <Container>의 설정된 padding에 영향을 받지 않기 위해 RootStyle에 배경이미지 배치
  backgroundImage: 'url(' + bgImage + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 70px top 80px',
});

//@eazae
const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minWidth: '100%',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function FullLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RootStyle>
        <Container maxWidth="lg">
          <Navbar onOpenSidebar={() => setOpen(true)} isFullLayout={true} />
          <MainStyle>
            <Outlet />
          </MainStyle>
        </Container>
      </RootStyle>
    </>
  );
}
