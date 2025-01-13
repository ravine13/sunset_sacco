package com.sunsetsacco.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunsetsacco.entities.LoanRepayment;
import com.sunsetsacco.repository.LoanRepaymentRepository;

@Service
public class LoanRepaymentService {
    private final LoanRepaymentRepository loanRepaymentRepository;

    @Autowired
    public LoanRepaymentService(LoanRepaymentRepository loanRepaymentRepository) {
        this.loanRepaymentRepository = loanRepaymentRepository;
    }

    // Save a new loan repayment
    public LoanRepayment saveLoanRepayment(LoanRepayment loanRepayment) {
        return loanRepaymentRepository.save(loanRepayment);
    }

    // Retrieve all loan repayments
    public Iterable<LoanRepayment> getAllLoanRepayments() {
        return loanRepaymentRepository.findAll();
    }

    // Retrieve a loan repayment by ID
    public LoanRepayment getLoanRepaymentById(Integer id) {
        return loanRepaymentRepository.findById(id).orElse(null);
    }

    // Update an existing loan repayment
    public LoanRepayment updateLoanRepayment(LoanRepayment loanRepayment) {
        return loanRepaymentRepository.save(loanRepayment);
    }

    // Delete a loan repayment by ID
    public void deleteLoanRepayment(Integer id) {
        loanRepaymentRepository.deleteById(id);
    }
}
