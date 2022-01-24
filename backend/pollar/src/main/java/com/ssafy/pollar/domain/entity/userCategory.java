package com.ssafy.pollar.domain.entity;

import javax.persistence.*;

@Entity
public class userCategory {
    @Id
    @GeneratedValue
    @Column(name = "userCategoryId")
    private long userCategoryId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User userCategory;

    @ManyToOne
    @JoinColumn(name = "Category")
    private Category category;


}
