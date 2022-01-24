package com.ssafy.pollar.controller;

import com.ssafy.pollar.model.dto.UserDto;
import com.ssafy.pollar.model.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {

    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @ApiOperation(value = "회원가입",notes="회원 정보를 입력한다.")
    @PostMapping("/signup")
    public ResponseEntity<String> signup (@RequestBody @ApiParam(value = "회원가입시 필요한 회원정보", required = true) UserDto userDto )throws Exception {
        userService.signup(userDto);


        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }

}
