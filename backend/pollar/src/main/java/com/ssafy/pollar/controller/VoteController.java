package com.ssafy.pollar.controller;

import com.ssafy.pollar.model.dto.VoteDto;
import com.ssafy.pollar.model.service.VoteService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
@CrossOrigin
public class VoteController {

    private final VoteService voteService;
    private static final String SUCCESS = "success";

    @ApiOperation(value = "피드 생성", notes="피드 정보를 입력받아서 생성함.")
    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody @ApiParam(value = "피드 정보", required = true) VoteDto voteDto)throws Exception {
        voteService.create(voteDto);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);  // status 200과 success라는 문자열을 반환
    }
}