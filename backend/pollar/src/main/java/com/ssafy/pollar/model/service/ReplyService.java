package com.ssafy.pollar.model.service;

import com.ssafy.pollar.model.dto.ReplyDto;

public interface ReplyService {
    void create(ReplyDto replyDto) throws Exception;
}
