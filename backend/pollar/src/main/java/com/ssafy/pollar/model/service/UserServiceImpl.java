package com.ssafy.pollar.model.service;

import com.ssafy.pollar.domain.entity.User;
import com.ssafy.pollar.domain.entity.UserCategory;
import com.ssafy.pollar.model.dto.UserDto;
import com.ssafy.pollar.model.repository.UserRepository;
import com.ssafy.pollar.model.repository.userCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final userCategoryRepository userCategoryRepository;

    //sts guestbook5  mysql ssafyweb 참고해서 category list로 dto에 넣기

    @Override
    public void signup(UserDto userDto) throws Exception {

        List<UserCategory> temp = new ArrayList<>();

        User user = User.builder()
                .uid(userDto.getUid())
                .userId(userDto.getUserId())
                .password(userDto.getPassword())
                .userNickname(userDto.getUserNickname())
                .userEmail(userDto.getUserEmail())
                .userBirthday(userDto.getUserBirthday())
                .userSex(userDto.getUserSex())

                .build();
        userRepository.save(user);
        userDto.getCategories();
//        for (long l : userDto.getCategories()){
//            UserCategory  userCategory = UserCategory.builder()
//                            .userCategory()
//            userCategoryRepository.save();
//        }



    }
}
