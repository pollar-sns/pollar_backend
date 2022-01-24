package com.ssafy.pollar.domain.entity;

import javax.persistence.*;

@Entity
public class voteSelect {
    @Id
    @GeneratedValue
    @Column(name = "voteSelectId")
    private long voteSelectId;

    @ManyToOne
    @JoinColumn(name = "voteId")
    private Vote voteSelect;

}
