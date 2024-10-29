package com.example.testproject;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TestprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestprojectApplication.class, args);
	}

	
	// configure ModelMapper using Bean annotation
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper(); // return new instance of modelMapper
	}
}
