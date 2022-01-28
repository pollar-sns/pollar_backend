package com.ssafy.pollar.domain.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
public class UserCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userCategoryId")
    private long userCategoryId;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User userCategory;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;



}
