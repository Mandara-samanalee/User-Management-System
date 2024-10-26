package com.example.testproject.controller;

import com.example.testproject.dto.UserDTO;
import com.example.testproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getusers")
    public List<UserDTO>getUsers() { // here we return the list and the return type is <UserDTO> and the method is getUsers
        return userService.getAllUsers();
    }

    @GetMapping("/user/{userId}")
    public UserDTO getUserById(@PathVariable Integer userId) {
        return userService.getUserDetails(userId);
    }

    @PostMapping("/adduser")
    public UserDTO createUser(@RequestBody UserDTO userDTO ) {  //Here we send a data payload in a request body. So we use Request body annotation.
        //Here the return type is UserDTO, Format of this data set is UserDTO and the variable name is userDTO
        return userService.saveUser(userDTO); //we send request body to the userService class.
    }

    @PutMapping("/updateuser")
    public UserDTO updateUser(@RequestBody UserDTO userDTO2) {  //Here we expect RequestBody, Data type is UserDTO and variable name is userDTO2
        return userService.updateUsr(userDTO2);
    }

    /*//In this method, we deleted a user that gives as a Request body
    @DeleteMapping("/deleteuser")
    public String deleteUser(@RequestBody UserDTO userDTO) {
        return userService.deleteUser(userDTO);
    }*/

    //In this method, we deleted a user that gives as a path parameter in URL, So we use pathVariable annotation
    @DeleteMapping("/deleteuser/{userId}")
    public String deleteUser(@PathVariable Integer userId) { //userId is variable name and type is integer
        return userService.deleteUser(userId);
    }
}
