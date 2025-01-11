package com.sunsetsacco.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="transactions")
public class Transaction {

    @Id
    @Column(name="transaction_id")
    private int transaction_id;  

    @Column(name="member_id")
    private int member_id;  

    @Column(name="type")
    private String type;  

    @Column(name="amount")
    private BigDecimal amount; 

    @Column(name="date")
    private LocalDate date;  

    @Column(name="description")
    private String description;  
}
