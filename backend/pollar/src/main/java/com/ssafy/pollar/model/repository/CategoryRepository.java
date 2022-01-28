package com.ssafy.pollar.model.repository;

import com.ssafy.pollar.domain.entity.Category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;


public interface CategoryRepository extends JpaRepository<Category,Long> {

    @Query(value = "select c from Category c join c.UserCategories uc join uc.userCategory u where u.userId  = ?1 ")
    List<Category> getUserCategories(String userId);

    @Query(value = "select c from Category c join c.voteCategories vc join vc.voteCategory v where v.voteId = ?1")
    List<Category> getVoteCategories(long voteId);



}
