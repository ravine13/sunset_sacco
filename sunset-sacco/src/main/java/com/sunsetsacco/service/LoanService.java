package com.sunsetsacco.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunsetsacco.entities.Loan;
import com.sunsetsacco.repository.LoanRepository;




@Service
public class LoanService {
    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository){
        this.loanRepository = loanRepository;
    }
    public Loan saveLoan(Loan loan){
        return loanRepository.save(loan);
    }
    public Iterable<Loan>getAllLoan(){
        return loanRepository.findAll();
    }

    public Loan getLoanById(Integer id){
        return loanRepository.findById(id).orElse(null);
    }

    public Loan updateLoan(Loan loan){
        return loanRepository.save(loan);
    }

    public void deleteLoan(Integer id){
        loanRepository.deleteById(id);
    }

    
}
