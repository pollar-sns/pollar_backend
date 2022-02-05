// @mui material components
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Icon,
  Avatar,
  Stack,
  IconButton,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
// Images
import profilePicture from '../../assets/images/profile.jpeg';
import profile from '../../_mocks_/profile';
import ImageUploadButton from '../common/ImageUploadButton';
import FollowListModal from './FollowListModal';
import { useState } from 'react';

function Profile({ profileInfo }) {
  // todo DELETE (mock data)
  profileInfo = profile;

  const [openFollowListModal, setOpenFollowListModal] = useState(false);
  // 팔로잉, 팔로워 모달 창을 open 시 focus할 tab
  const [modalListType, setModalListType] = useState();

  const handleOpenFollowModal = (type) => {
    // type: 'following' | 'follower'
    setModalListType(type);
    // 모달창을 open
    setOpenFollowListModal((curr) => !curr);
  };

  return (
    <Box component="section" pt={{ xs: 6, sm: 12 }} pb={{ xs: 3, sm: 6 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Stack
            direction="row"
            spacing={3}
            mt={{ xs: -16, md: -20 }}
            pt={3}
            mx={2}
            alignItems="flex-end"
            sx={{ width: '100%' }}
          >
            <Avatar
              src={profilePicture}
              alt="Profile Photo"
              shadow="xl"
              sx={{ width: '10rem', height: '10rem' }}
            />
            <Stack alignItems="flex-start" sx={{ width: '100%' }}>
              <Typography variant="h4" color="primary.dark">
                @{profileInfo.userNickname}
              </Typography>
              <Typography variant="body1" color="text.disabled">
                {profileInfo.userId}
              </Typography>
              <Grid container spacing={3} mt={-1}>
                <Grid item>
                  <Typography component="span" variant="body2" fontWeight="bold" color="secondary">
                    {profileInfo.totalPollCount}&nbsp;
                  </Typography>
                  <Typography component="span" variant="overline" color="text.secondary">
                    Polls
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="body2" fontWeight="bold" color="secondary">
                    {profileInfo.totalVoteCount}&nbsp;
                  </Typography>
                  <Typography component="span" variant="overline" color="text.secondary">
                    Votes
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
            <Stack alignItems="flex-end" justifyContent="space-between" sx={{ height: '100%' }}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                spacing={0.5}
                mt={{ xs: 3, sm: 6 }}
              >
                <IconButton
                  href="/users/settings"
                  color="primary"
                  aria-label="add an alarm"
                  size="small"
                >
                  <SettingsIcon fontSize="small" />
                </IconButton>
                <Button href="/users/settings" variant="outlined" size="small">
                  Settings
                </Button>
                <Button variant="outlined" size="small" disabled>
                  &nbsp;View&nbsp;Statistics&nbsp;
                </Button>

                {true ? (
                  <Button variant="contained" disableElevation size="small">
                    &nbsp;+&nbsp;Follow&nbsp;
                  </Button>
                ) : (
                  <Button variant="outlined" size="small">
                    &nbsp;Unfollow&nbsp;
                  </Button>
                )}
              </Stack>

              <Stack direction="row" alignItems="flex-end" mt={3} mb={-3}>
                <Stack mx={2} alignItems="center" justifyContent="center">
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                    textTransform="uppercase"
                  >
                    Follower
                  </Typography>
                  <Button size="small" onClick={() => handleOpenFollowModal('follower')}>
                    <Typography component="span" variant="h4" fontWeight="bold" color="secondary">
                      {profileInfo.followerCount}
                    </Typography>
                  </Button>
                </Stack>
                <Stack mx={0} alignItems="center" justifyContent="center">
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                    textTransform="uppercase"
                  >
                    Following
                  </Typography>
                  <Button size="small" onClick={() => handleOpenFollowModal('following')}>
                    <Typography component="span" variant="h4" fontWeight="bold" color="secondary">
                      {profileInfo.followingCount}
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* <ImageUploadButton /> */}
          <FollowListModal openModal={openFollowListModal} type={modalListType} />
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile;
