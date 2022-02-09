package com.ssafy.pollar.model.repository;

import com.ssafy.pollar.domain.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote,Long> {
    Optional<Vote> findByVoteId(Long voteReply);
}
