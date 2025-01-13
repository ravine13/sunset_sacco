package com.sunsetsacco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunsetsacco.entities.LoanRepayment;


@Repository
public interface LoanRepaymentRepository extends JpaRepository<LoanRepayment, Integer>{
    @Query("SELECT r FROM Loan r WHERE r.loan_id = :id")
    Optional<LoanRepayment> findLoanById(@Param("id") Integer id);
}