import React, { useState, useEffect } from 'react'
import Userform from './userform';
import Usertable from './usertable';
import axios from 'axios';


export default function Users() {
  const [users, setUsers] = useState([]);
  /* const [submitted, setSubmitted] = useState(false); //we create this variable to ensure the form reset after submitting values */
  const [isEdit, setIsEdit] = useState(false);//To inform the userform component that the user is in edit mode or not
  const [selectedUser, setSelectedUser] = useState({});//To store the selected user data


  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    axios.get(`http://localhost:8080/api/v1/getusers`) //axios returns a promise, so it can be access by then and catch
      .then((response) => {
        console.log(response.data); //we assign this response to setUsers 
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }


  const addUser = (data) => {
    /* setSubmitted(true); Add button is clicked and the data is submitted */
    const payload = {
      id: data.id,
      name: data.name,//we can get id and name in the payload by using the retrieved data after click button in the userform
    }
    axios.post(`http://localhost:8080/api/v1/adduser`, payload) //we need to include url and the payload as parameters
      .then(() => {
        fetchUsers(); //call the fetchUsers function to get the newly updated data, otherwise you need to reload the page
        /*  setSubmitted(false); After submitted, form is reset  */
      })
      .catch(error => {
        console.log(error);
      })
  }



  const updateUser = (data) => {
    //setSubmitted(true); 
    const payload = {
      id: data.id,
      name: data.name,
    }
    axios.put(`http://localhost:8080/api/v1/updateuser`, payload)
      .then(() => {
        fetchUsers();
        //setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.log(error);
      })
  }


  const deleteUser = (data) => {
    axios.delete(`http://localhost:8080/api/v1/deleteuser/${data.id}`) //In delete method, we pass second parameter data as an object
      .then(() => {
        // console.log(response.data);
        fetchUsers(); //call the fetchUsers function to get the newly updated data in usertable
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div
      sx={{
        width: 'calc(100%-240px)',
        margin: 'auto',
        marginTop: '120px',
      }}>
      <Userform
        AddUsers={addUser} //The Add button is in the userform. So, addUser function is needed to call in userfrom. here the prop name is AddUsers
        /*   submitted={submitted} send submitted prop to userform */
        details={selectedUser} //The selectedUser is used to store the selected user data. So, we need to pass this to the userform component
        isEdit={isEdit} //To inform the userform component that the user is in edit mode or not
        updateUsers={updateUser} //The update button is in the userform. So, updateUser function is needed to call in userfrom. here the prop name is updateUsers
      />
      <Usertable
        rows={users}
        selectedUser={details => {
          setSelectedUser(details);
          setIsEdit(true); //To inform the usertable component that the user can edited
        }}
        deleteUser={data => window.confirm('Are you sure to delete?') && deleteUser(data)}
      //The delete button is in the usertable. So, deleteUser function is needed to call in usertable. here the prop name is deleteUser 
      />
    </div>
    //rows is refered to the prop name here, We use props to pass these data to the usertable component. We can pass any no of props in this way.
  )
}
