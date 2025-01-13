package com.sunsetsacco.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunsetsacco.entities.Loan;

import java.util.Optional;


@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer>{
    @Query("SELECT r FROM Loan r WHERE r.loan_id = :id")
    Optional<Loan> findLoanById(@Param("id") Integer id);
}
