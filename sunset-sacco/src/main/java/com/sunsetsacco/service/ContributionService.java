package com.sunsetsacco.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunsetsacco.entities.Contribution;
import com.sunsetsacco.repository.ContributionRepository;

import java.util.List;


@Service
public class ContributionService {

    private final ContributionRepository contributionRepository;

    @Autowired
    public ContributionService(ContributionRepository contributionRepository){
        this.contributionRepository = contributionRepository;
    }

    public Contribution saveContribution(Contribution contribution){
        return contributionRepository.save(contribution);
    }

    public List<Contribution> getAllContributions(){
        return contributionRepository.findAll();
    }
    
    public Contribution geContributionById(Integer id){
        return contributionRepository.findById(id).orElse(null);
    }
    public Contribution updateContribution(Contribution contribution){
        return contributionRepository.save(contribution);
    }
    public void deleteContribution(Integer id){
        contributionRepository.deleteById(id);
    }
    
}
