package com.sunsetsacco.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@Table(name="loans")
public class Loan {
    @Id
    @Column(name="loan_id")
    private int loan_id;

    @Column(name="member_id")
    private int member_id;

    @Column(name="loan_amount")
    private int loan_amount;

    @Column(name="interest_rate")
    private int interest_rate;

    @Column(name="repayment_period")
    private String repayment_period;

    @CreationTimestamp
    @Column(name="created_at", updatable = false)
    private LocalDateTime created_at;  

    @UpdateTimestamp
    @Column(name="updated_at")
    private LocalDateTime updated_at;  
}

