package com.sunsetsacco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunsetsacco.entities.Transaction;

@Repository
public interface TranscationRepository extends JpaRepository<Transaction, Integer>{
    @Query("SELECT r FROM Transcation r WHERE r.barber_id = :id")
    Optional<Transaction> findTranscationById(@Param("id")Integer id);
}
