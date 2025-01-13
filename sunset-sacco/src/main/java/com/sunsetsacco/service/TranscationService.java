package com.sunsetsacco.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunsetsacco.entities.Transaction;
import com.sunsetsacco.repository.TranscationRepository;

@Service
public class TranscationService {
    private final TranscationRepository transcationRepository;

    @Autowired
    public TranscationService(TranscationRepository transcationRepository){
        this.transcationRepository = transcationRepository;
    }

    public Transaction saveTransaction(Transaction transaction){
        return transcationRepository.save(transaction);
    }

    public List<Transaction> getAllTranscations(){
        return transcationRepository.findAll();
    }
    public Transaction geTransactionById(Integer id){
        return transcationRepository.findById(id).orElse(null);
    }
    public Transaction updateTransaction(Transaction transaction){
        return transcationRepository.save(transaction);
    }
    public void deleteTranscation(Integer id){
        transcationRepository.deleteById(id);
    }
}
