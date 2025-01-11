package com.sunsetsacco.entities;

import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Data
@Table(name="contributions")
public class Contribution {

    @Id
    @Column(name="contribution_id")
    private int contribution_id;

    @Column(name="member_id")
    private int member_id;

    @Column(name="amount")
    private int amount;

    @Column(name="date")
    private LocalDate date; 

    @Column(name="payment_method")
    private String payment_method; 
}
