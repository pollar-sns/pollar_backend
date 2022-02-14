// import DatePicker from "./DatePicker";
import {
  Box,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Grid,
  Chip,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { useEffect, useState } from "react";
import React from "react";
import NeumorphicPaper from "../common/NeumorphicPaper";

import posts from "../../_mocks_/blog";

function DetailForm({ voteInfo, categories }) {
  return (
    <>
      <Box>
        <Stack spacing={1}>
          <Typography variant="h4" paddingTop={1} marginBottom={2}>
            {voteInfo && voteInfo.voteName}
          </Typography>{" "}
        </Stack>
        <div>
          <Chip label="카테고리1" />
          <Chip label="카테고리2" />
          <Chip label="카테고리3" />
        </div>
        <Card sx={{ height: "40vh", width: "30vw", marginTop: "20px" }}>
          <Typography paddingTop={1}>
            {/* 값 불러올때 앞에 객체를 && 조건을 줘서 없을 경우 불러오지 않게 설정해줘야됨 */}
            {voteInfo && voteInfo.voteContent}
          </Typography>{" "}
        </Card>
        <Stack>
          <Typography variant="h5">선택지1</Typography>
          <Typography>선택지2</Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={6}
          paddingTop={2}
          paddingBottom={2}
        ></Stack>
      </Box>
    </>
  );
}

export default DetailForm;
