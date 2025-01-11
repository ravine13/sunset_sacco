package com.sunsetsacco.entities;

import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

@Data
@Table(name="loan_repayments")
public class LoanRepayment {

    @Id
    @Column(name="repayment_id")
    private int repayment_id;

    @Column(name="loan_id")
    private int loan_id;

    @Column(name="amount_paid")
    private int amount_paid;

    @Column(name="payment_date")
    private String payment_date; 

    @Column(name="balance_remaining")
    private int balance_remaining; 

    
}