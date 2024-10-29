# User Management System

This repository contains a full-stack User Management application built with React for the frontend and Spring Boot for the backend.

## Features

- Add new user records
- View user details
- Update existing records
- Delete user records

## Tech Stack

- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MySQL

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed (for React)
- **Java** 17 and **Java JDK** (version 11 or higher)
- **Maven** installed (for Spring Boot)
- **IntelliJ IDEA** (recommended for development)
- **MySQL Database**

## Setup and Installation

### 1. Backend Setup (Spring Boot)

#### Configure MySQL Database:

Update the database configurations in `src/main/resources/application.properties` with your database details:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/<database_name>?createDatabaseIfNotExist=true
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

#### Run the Backend Server:

1. Navigate to the backend directory.
2. Start the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

### 2. Frontend Setup (React)

1. Navigate to the frontend directory.
2. Install the required dependencies:
     ```bash
     npm install
     ```

#### Run the Frontend Server:
   ```bash
   npm start
   ```

### Running the Application

1. Start both the frontend and backend servers.
2. Open your browser and go to `http://localhost:3000` to access the application.

## License

This project is licensed under the MIT License.
