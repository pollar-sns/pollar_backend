package com.ssafy.pollar.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@RequiredArgsConstructor
@Getter
public class VoteCategory {
    @Id
    @GeneratedValue
    @Column(name = "voteCategoryId")
    private long voteCategoryId;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "voteId")
    private Vote voteCategory;
}
