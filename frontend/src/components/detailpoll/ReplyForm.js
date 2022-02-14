import { Reply } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReplyDetail from "./ReplyDetail";

export default function ReplyForm({ replies }) {
  let replyMap = []; // 댓글 map 으로 변환하기 위한 빈 배열 선언
  replies && (replyMap = replies); // replies 객체가 있을때만 복사
  return (
    <>
      <Typography
        variant="h4"
        paddingTop={1}
        marginBottom={2}
        marginLeft={4}
        marginTop={4}
      >
        댓글 {replyMap.length}개
      </Typography>
      {replyMap.map((reply) => {
        var a = <ReplyDetail reply={reply} />;
        return a;
      })}
    </>
  );
}
