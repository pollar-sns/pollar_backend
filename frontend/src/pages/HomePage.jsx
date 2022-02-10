// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
// components
import Page from '../components/Page';
import homeImg from '../assets/images/grad_img.png';
<<<<<<< HEAD
=======
import GradAnimatedButton from '../components/common/GradAnimatedButton';
>>>>>>> 073aaf4d46d4cb613d479ee6e2b0f89772bdc951
import ImageUploadButton from '../components/common/ImageUploadButton';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
      <Container maxWidth="md" sx={{ height: '60vh' }}>
        <Grid container spacing={2} my={10}>
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={4} pb={3}>
              <Typography variant="h2" color="primary">
                Poll Whatever,
                <br />
                Anywhere
              </Typography>
              <Typography variant="inherit" color="primary.light">
<<<<<<< HEAD
                프로젝트 CICD 테스트
                <ImageUploadButton />
=======
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, nunc a in vel
                feugiat.
>>>>>>> 073aaf4d46d4cb613d479ee6e2b0f89772bdc951
              </Typography>
            </Stack>
            <GradAnimatedButton href="/users/signup">
              <Typography variant="body1" color="inline">
                Get Started
              </Typography>
            </GradAnimatedButton>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={homeImg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
