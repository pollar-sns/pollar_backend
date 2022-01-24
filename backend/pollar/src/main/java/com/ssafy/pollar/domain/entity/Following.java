package com.ssafy.pollar.domain.entity;

import javax.persistence.*;

@Entity
public class Following {
    @Id
    @GeneratedValue
    @Column(name = "followId")
    private long followId;

    @ManyToOne
    private User follower;

    @ManyToOne
    private User followee;

//        1 : N
//    user -> followerId
//        1 : M
//    user -> followeeId

//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User followee;

//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User follower;

}
