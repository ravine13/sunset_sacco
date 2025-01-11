package com.sunsetsacco.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="settings")
public class Setting {

    @Id
    @Column(name="setting_id")
    private int setting_id;

    @Column(name="key")
    private String key;  

    @Column(name="value")
    private String value;  
}
