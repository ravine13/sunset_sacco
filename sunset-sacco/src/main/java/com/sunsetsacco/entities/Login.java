package com.sunsetsacco.entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="logins")
public class Login {
    @Id
    @Column(name="login_id")
    private int login_id;

    @Column(name="user_id")
    private int user_id; 

    @Column(name="email")
    private String email;

    @Column(name="password_hash")
    private String password_hash;

    @Column(name="user_type")
    private String user_type;  

    @CreationTimestamp
    @Column(name="created_at", updatable = false)
    private LocalDateTime created_at;  

    @UpdateTimestamp
    @Column(name="updated_at")
    private LocalDateTime updated_at;  

    @Column(name="last_login")
    private LocalDateTime last_login;  
}
