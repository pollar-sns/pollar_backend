package com.ssafy.pollar.controller;

import com.ssafy.pollar.model.dto.ReplyDto;
import com.ssafy.pollar.model.service.ReplyService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reply")
@RequiredArgsConstructor
@CrossOrigin
public class ReplyController {

    private final ReplyService replyService;
    private static final String SUCCESS = "success";

    @ApiOperation(value = "댓글생성", notes = "댓글 정보를 입력한다.")
    @PostMapping("/create")
    public ResponseEntity<String> createReply(@RequestBody @ApiParam(value = "댓글 정보.", required = true) ReplyDto replyDto) throws Exception {
        replyService.create(replyDto);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);  // status 200과 success라는 문자열을 반환
    }
}
