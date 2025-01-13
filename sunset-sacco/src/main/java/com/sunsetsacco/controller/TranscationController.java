package com.sunsetsacco.controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/Transcations")
public class TranscationController {
    private final TranscationService transcationService;

    @Autowired
    public TranscationController(TranscationService transcationService){
        this.transcationService = transcationService;
    }
    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerTranscation(@RequestBody Transcation transcation){
        Transction savedtranscation = transcationService.saveBarber(barber)
        return ResponseEntity.ok(savedtranscation);
    }

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllTranscations(){
        return ResponseEntity.ok(transcationService.getAllTranscations());
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?>getAllTranscations(){
        return ResponseEntity.ok(transcationService.getAllTranscations());
    }
    @DeleteMapping(value = "path/{/id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?>DeleteTranscation(@PathVariable Integer id){
        transcationService.deleteTranscation(id);
        return ResponseEntity.ok().build();
    }

}
