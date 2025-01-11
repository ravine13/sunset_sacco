package com.sunsetsacco.entities;


import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="members")
public class Member {

    @Id
    @Column(name="id")
    private int id; 

    @Column(name="first_name")
    private String first_name;

    @Column(name="last_name")
    private String last_name;

    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phone;

    @Column(name="address")
    private String address;

    @Column(name="membership_date")
    private LocalDate membership_date;  

    @Column(name="status")
    private String status;

    @CreationTimestamp
    @Column(name="created_at", updatable = false)
    private LocalDate created_at; 

}