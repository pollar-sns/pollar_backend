package com.ssafy.pollar.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class VoteCategoryDto {

    private long voteId;
    private List<Long> categoryList;
}
