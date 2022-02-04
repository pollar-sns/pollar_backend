import Container from '@mui/material/Container';

import { Box, Card } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Posts from '../components/profile/Posts';
import Profile from '../components/profile/Profile';

export default function ProfilePage() {
  const { userId } = useParams();
  // 사용자 본인의 프로필: true, 다른 사용자의 프로필: false
  const isMypage = typeof userId === 'undefined';

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box bgColor="white">
        {/* <Container> */}
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: 8,
            mb: 4,
            backgroundColor: '#fff6',
            // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: 'saturate(200%) blur(30px)',
            /* offset-x | offset-y | blur-radius | spread-radius | color */
            boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'visible',
          }}
        >
          <Profile />

          <Box bgColor="white" minHeight="60vh">
            <Posts />
          </Box>
        </Card>
        {/* </Container> */}
      </Box>
    </>
  );
}
