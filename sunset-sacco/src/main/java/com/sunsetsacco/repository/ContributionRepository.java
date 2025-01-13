package com.sunsetsacco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.sunsetsacco.entities.Contribution;



public interface ContributionRepository extends JpaRepository<Contribution,Integer>{
    @Query("SELECT r FROM Contribution r WHERE r.contribution_id = :id")
    Optional<Contribution> findContributionById(@Param("id")Integer id);
    
}
