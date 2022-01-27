package com.ssafy.pollar.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class UserCategoryDto {

    private String userId;
    private List<Long> categoryList;
}
