// @mui material components
import Container from '@mui/material/Container';

import { Box, Icon, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';

function Posts() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="profile feed list tab"
              sx={{ width: '40%' }}
            >
              <Tab label="Uploads" value="1" />
              <Tab label="Votes" value="2" />
              <Tab label="Likes" value="3" />
            </TabList>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              //? sm 이후로는(up)동일한 값을 적용하려면 그냥 sm까지만 적용하면 된다
              /* (xs, extra-small: 0px
              sm, small: 600px
              md, medium: 900px
              lg, large: 1200px
              xl, extra-large: 1536px
              */
              mx: { xs: -4, sm: -5 },
              mt: -0.5,
              mb: -10,
              height: '60vh',
              boxShadow: 10,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              px: 10,
              py: 2,
            }}
          >
            <TabPanel value="1">Uploaded</TabPanel>
            <TabPanel value="2">Voted</TabPanel>
            <TabPanel value="3">
              <Typography variant="body1" fontWeight="light" color="text">
                Decisions: If you can&apos;t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain avoidance is creating an
                illusion of equality). Choose the path that leaves you more equanimous. <br />
                <Typography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    alignItems: 'center',

                    '& .material-icons-round': {
                      transform: `translateX(3px)`,
                      transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                    },

                    '&:hover .material-icons-round, &:focus .material-icons-round': {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: 'bold' }}>arrow_forward</Icon>
                </Typography>
              </Typography>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Container>
  );
}

export default Posts;
