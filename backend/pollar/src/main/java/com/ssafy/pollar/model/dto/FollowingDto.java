package com.ssafy.pollar.model.dto;

import com.ssafy.pollar.domain.entity.Following;
import com.ssafy.pollar.domain.entity.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "FollowingDto : 팔로우정보", description = "팔로우의 현 상황을 나타낸다.")
public class FollowingDto{

    private Long followId;
    @ApiModelProperty(value = "나를 팔로우하는 유저 아이디")
    private String followerId;
    @ApiModelProperty(value = "내가 팔로우하는 유저 아이디")
    private String followeeId;
    @ApiModelProperty(value = "나를 팔로우하는 유저")
    private User follower;
    @ApiModelProperty(value = "내가 팔로우하는 유저")
    private User followee;

    // following Table toDto
    public FollowingDto(Following following) {
        this.follower = following.getFollower();
        this.followee = following.getFollowee();
    }
}
