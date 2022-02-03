// material
import { Box, Grid, Container, Typography, Stack } from '@mui/material';
// components
import Page from '../components/Page';
// import {
//   AppTasks,
//   AppNewUsers,
//   AppBugReports,
//   AppItemOrders,
//   AppNewsUpdate,
//   AppWeeklySales,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppCurrentSubject,
//   AppConversionRates,
// } from '../components/_dashboard/app';
import homeImg from '../assets/images/grad_img.png';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        {/* <Box sx={{ pb: 5 }}>
        </Box> */}
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={4}>
              <Typography variant="h2" color="primary">
                Poll Whatever,
                <br />
                Anywhere
              </Typography>
              <Typography variant="inherit" color="primary.light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, nunc a in vel
                feugiat.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={homeImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
