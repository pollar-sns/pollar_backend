package com.ssafy.pollar.model.repository;

import com.ssafy.pollar.domain.entity.VoteCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteCategoryRepository extends JpaRepository<VoteCategory,Long> {
}
