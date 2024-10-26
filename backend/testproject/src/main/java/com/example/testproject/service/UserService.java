package com.example.testproject.service;

import com.example.testproject.dto.UserDTO;
import com.example.testproject.model.User;
import com.example.testproject.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired //we use Autowired annotation for dependancy injection
    private UserRepository userRepository;  //private datatype property_name
    //we transfer data between controller and the service files through the repository file

    @Autowired
    private ModelMapper modelMapper;
    //we use model mapper to map the data in to the format used in the service file

    public List<UserDTO> getAllUsers() {  //datatype is list and object type is UserDTO and method name is getAllUsers
        List<User> userlist = userRepository.findAll(); //here we declare userList variable as a List and type is model <User>
        //By using the findAll function in userRepository we get the users list from the database and assigned those to the userList variable
        return modelMapper.map(userlist, new TypeToken<List<UserDTO>>() {
        }.getType());
        //Here we map the userList variable to the specific data type using the modelMapper
    }

    public UserDTO getUserDetails(Integer userId) {
       User user = userRepository.getUserById(userId); //Here getUserById is the custom interface method we written in user repository
       return modelMapper.map(user, UserDTO.class);//Here data in the user variable is mapped into UserDTO class object format
    } //we can use findById method in userRepository for this also


    public UserDTO saveUser(UserDTO userDTO) {  //data type is UserDTO, format is UserDTO and the variable name is userDTO
        User user = modelMapper.map(userDTO, User.class); //Here we create a custom user object that type is User.
        // Map userDTO to class in the user model. here User model is our entity
        userRepository.save(user);
        return userDTO;  //Here we return our dataset that we sent
    }

    public UserDTO updateUsr(UserDTO userDTO1) { //here the variable name is userDTO1
        User user1 = modelMapper.map(userDTO1, User.class);
        userRepository.save(user1); //here we use same save method, In this if the user is not exists, it creates new user otherwise it will update the existing details
        return userDTO1;
    }

    /*//In this method, we deleted a user that gives as a Request body
    public String deleteUser(UserDTO userDTO) {
        userRepository.delete(modelMapper.map(userDTO, User.class)); //Here we use delete method in userRepository
        return "User deleted";
    }*/

    //In this method, we deleted a user that gives as a path parameter in URL
    public String deleteUser(Integer userId) {  //Here we write data type and the variable name inside the brackets
        userRepository.deleteById(userId); //Here we use deleteById method in userRepository and gives the parameter userId
        return "User deleted";
    }
}
