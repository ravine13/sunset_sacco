package com.sunsetsacco.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunsetsacco.entities.Contribution;
import com.sunsetsacco.service.ContributionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/contribution")
public class ContributionController {
    private final ContributionService contributionService;

    @Autowired
    public ContributionController(ContributionService contributionService) {
        this.contributionService = contributionService;
    }

    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerContribution(@RequestBody Contribution contribution) {
        Contribution savedContribution = contributionService.saveContribution(contribution);
        return ResponseEntity.ok(savedContribution);
    }

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllContributions() {
        return ResponseEntity.ok(contributionService.getAllContributions());
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateContribution(@PathVariable Integer id, @RequestBody Contribution contribution) {
        Contribution updatedContribution = contributionService.updateContribution(contribution);
        return ResponseEntity.ok(updatedContribution);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteContribution(@PathVariable Integer id) {
        contributionService.deleteContribution(id);
        return ResponseEntity.ok().build();
    }
}
