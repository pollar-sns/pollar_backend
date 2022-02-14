import { Container, Grid, Stack, Typography } from "@mui/material";

export default function ReplyDetail({ reply }) {
  return (
    <>
      <Stack direction="row">
        <Grid item xs={2}>
          사진
        </Grid>
        <Grid item xs={8}>
          <Stack>
            <Typography
              variant="h4"
              paddingTop={1}
              marginBottom={2}
              marginLeft={4}
            >
              닉네임
            </Typography>
            <Typography
              variant="h4"
              paddingTop={1}
              marginBottom={2}
              marginLeft={4}
            >
              {reply.replyContent}
            </Typography>
          </Stack>
        </Grid>
      </Stack>
      <hr></hr>
    </>
  );
}
