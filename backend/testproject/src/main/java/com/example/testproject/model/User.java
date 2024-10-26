package com.example.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //used to create tables in database
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id  //this annotation is used to define primary key in the class
    private int id;
    private String name;
}
