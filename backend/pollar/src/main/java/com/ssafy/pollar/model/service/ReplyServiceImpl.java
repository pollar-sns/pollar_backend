package com.ssafy.pollar.model.service;

import com.ssafy.pollar.domain.entity.Reply;
import com.ssafy.pollar.domain.entity.User;
import com.ssafy.pollar.domain.entity.Vote;
import com.ssafy.pollar.model.dto.ReplyDto;
import com.ssafy.pollar.model.repository.ReplyRepository;
import com.ssafy.pollar.model.repository.UserRepository;
import com.ssafy.pollar.model.repository.VoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService {
    // private final을 사용해야 RequiredArgsConstructor 을 통해 초기화 됨
    private final ReplyRepository replyRepository;
    private final UserRepository userRepository;
    private final VoteRepository voteRepository;
    @Override
    public void create(ReplyDto replyDto) throws Exception {

        User replyUser = userRepository.findByUserId(replyDto.getReplyUser()).get();    // user id로 user 객체 찾아오기
        Vote voteReply = voteRepository.findByVoteId(replyDto.getVoteReply()).get();    // vote id로 vote 객체 찾아오기
        Reply reply = Reply.builder()
                .replyUser(replyUser)
                .voteReply(voteReply)
                .replyContent(replyDto.getReplyContent())
                .replyCreateTime(LocalDateTime.now())   // 현재시간 입력
                .build();
        replyRepository.save(reply);    // DB에 reply 정보 저장
    }
}
