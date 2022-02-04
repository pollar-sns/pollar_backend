package com.ssafy.pollar.model.repository;

import com.ssafy.pollar.domain.entity.EmailConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailConfirmationTokenRepository extends JpaRepository<EmailConfirmationToken,String> {

}
