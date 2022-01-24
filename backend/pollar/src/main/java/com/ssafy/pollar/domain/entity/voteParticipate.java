package com.ssafy.pollar.domain.entity;

import javax.persistence.*;

@Entity
public class voteParticipate {

    @Id
    @GeneratedValue
    @Column(name = "voteParticipateId")
    private long voteParticipateId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User userPariticipate;

    @ManyToOne
    @JoinColumn(name = "voteId")
    private Vote voteParticipate;
}
