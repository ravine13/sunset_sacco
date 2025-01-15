package com.sunsetsacco.entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="users")
public class User {

    @Id
    @Column(name="user_id")
    private int user_id;  

    @Column(name="username")
    private String username;  

    @Column(name="email")
    private String email;  

    @Column(name="password_hash")
    private String password_hash; 

    @Column(name="role")
    private String role;  

    @Column(name="status")
    private String status;  

    @CreationTimestamp
    @Column(name="created_at", updatable = false)
    private LocalDateTime created_at;

    public String getPassword() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }  
}
