package com.ssafy.pollar.model.service;

import com.ssafy.pollar.model.dto.UserDto;

public interface UserService {

    void signup(UserDto userDto) throws Exception;

}
