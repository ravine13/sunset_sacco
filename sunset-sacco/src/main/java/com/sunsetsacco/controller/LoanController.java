package com.sunsetsacco.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sunsetsacco.entities.Loan;
import com.sunsetsacco.service.LoanService;


@RestController
@RequestMapping("/loan")
public class LoanController {
    private final LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService){
        this.loanService = loanService;
    }

    @PostMapping(value="/register",produces = MediaType.APPLICATION_JSON_VALUE)
    public Loan createLoan(@RequestBody Loan loan){
        return loanService.saveLoan(loan);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Loan getLoanById(@PathVariable Integer id){
        return loanService.getLoanById(id);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateLoan(@PathVariable Integer id, @RequestBody Loan loan){
        Loan updateLoan = loanService.updateLoan(loan);
        return ResponseEntity.ok(updateLoan);
    }
    @DeleteMapping(value = "path/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteLoan(@PathVariable Integer id){
        loanService.deleteLoan(id);
        return ResponseEntity.noContent().build();
    }
    
}
