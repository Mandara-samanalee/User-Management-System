package com.example.testproject.repository;

import com.example.testproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
//here the features of the JpaRepository is inherited to UserRepository. Here <data type of the model, data type of the primary key>
public interface UserRepository extends JpaRepository<User, Integer> {
   @Query(value = "SELECT * FROM User WHERE id = ?1", nativeQuery = true)
    User getUserById(Integer userId);
    //Here we use Query annotation to write queries and write query in value field.
    //The userId we get by calling this getUserDetails function will placed to the ? and here we use numbers(1) for parameter placement.
}

/*
//If we have more than one parameters we can write this query as follows. here userId is parameter1 and name is parameter2
@Query(value = "SELECT * FROM User WHERE id = ?1 AND name = ?2", nativeQuery = true)
User getUserById(Integer userId, String name);
*/
