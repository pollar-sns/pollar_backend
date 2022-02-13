package com.ssafy.pollar.model.service;

import com.ssafy.pollar.model.dto.ParticipateDto;
import com.ssafy.pollar.model.dto.SelectionDto;
import com.ssafy.pollar.model.dto.VoteDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VoteService {
    Long create(VoteDto voteDto, List<MultipartFile> votePhotos) throws Exception;  // 게시글 만들기
    void delete(Long voteId) throws Exception;  // 게시글 삭제
    VoteDto detail(Long voteId) throws Exception;                // 게시글 상세보기
    List<VoteDto> getVoteList() throws Exception;
    void insertLike(String userId, Long voteId)throws Exception;
    void cancelLike(String userId , Long voteId)throws Exception;
    int countLike(Long voteId)throws Exception;
    List<String> getLikeList(Long voteId)throws Exception;
    List<SelectionDto> getVoteSelectionList(Long voteId)throws Exception;
    void userVoteSelection(String userId, Long selectionId)throws Exception;
    void cancelUserVoteSelection(String userId, Long selectionId)throws Exception;
    List<ParticipateDto> getVoteUserList(Long voteId)throws Exception;
    List<VoteDto> getUserMadeVoteList(String userId)throws Exception;
    long getUserMadeVoteCount(String userId)throws Exception;
    List<VoteDto> getUserParticipateVoteList(String userId)throws Exception;
    long getUserParticipateVoteCount(String userId)throws Exception;
    List<VoteDto> getUserLikeVoteList(String userId)throws Exception;
    List<VoteDto> getUserInterestVoteList(String userId) throws Exception;
    List<VoteDto> getUserFollowVoteList(String userId) throws Exception;
    List<VoteDto> getTrendingVote()throws Exception;
}
