package com.sunsetsacco.controller;

import com.sunsetsacco.entities.LoanRepayment;
import com.sunsetsacco.service.LoanRepaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loan-repayment")
public class LoanRepaymentController {

    private final LoanRepaymentService loanRepaymentService;

    @Autowired
    public LoanRepaymentController(LoanRepaymentService loanRepaymentService) {
        this.loanRepaymentService = loanRepaymentService;
    }

    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerLoanRepayment(@RequestBody LoanRepayment loanRepayment) {
        LoanRepayment savedLoanRepayment = loanRepaymentService.saveLoanRepayment(loanRepayment);
        return ResponseEntity.ok(savedLoanRepayment);
    }

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllLoanRepayments() {
        return ResponseEntity.ok(loanRepaymentService.getAllLoanRepayments());
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getLoanRepaymentById(@PathVariable Integer id) {
        return ResponseEntity.ok(loanRepaymentService.getLoanRepaymentById(id));
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateLoanRepayment(@PathVariable Integer id, @RequestBody LoanRepayment loanRepayment) {
        LoanRepayment updatedLoanRepayment = loanRepaymentService.updateLoanRepayment(loanRepayment);
        return ResponseEntity.ok(updatedLoanRepayment);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteLoanRepayment(@PathVariable Integer id) {
        loanRepaymentService.deleteLoanRepayment(id);
        return ResponseEntity.ok().build();
    }
}
