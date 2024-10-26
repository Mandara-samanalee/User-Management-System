package com.example.testproject.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data  //used to handle data
@AllArgsConstructor //this is used to create a constructor with one arguement that related to each and every property
@NoArgsConstructor  //this is used to create a constructor with no arguements
public class UserDTO {
    private int id;
    private String name;
}
