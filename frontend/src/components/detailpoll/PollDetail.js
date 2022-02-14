import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import { Box, Card, Button } from "@mui/material";

import { voteCreate, voteImageCreate } from "../../services/api/PollApi";
import DetailForm from "./DetailForm";
import { loggedUserState } from "../../atoms/atoms";
import { constSelector, useRecoilState } from "recoil";
import ReplyForm from "./ReplyForm";

function PollDetail({ voteInfo, categories }) {
  return (
    <>
      <Box>
        <DetailForm voteInfo={voteInfo} categories={categories} />
      </Box>
    </>
  );
}

export default PollDetail;
