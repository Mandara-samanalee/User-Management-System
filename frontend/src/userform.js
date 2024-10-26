import { Button, Input, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Userform({ AddUsers, submitted, details, isEdit, updateUsers }) {
    //If we declare a variable as example 'id', it will become a state variable. We donot direct assign a value to state variable, we use setId function for assign a value to state variable, When we update the state variable, the component will re-render
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const handleAddUser = () => {
        if(id !== 0 && name !== '') //If the id is not equal to 0 and the name is not empty, then call the AddUsers function
        AddUsers({ id, name }); //After calling AddUsers functions(submitting data), reset the id and name field
        setId('');
        setName('');
    };


    /* useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);
     */


    useEffect(() => {
        if (details?.id && details.id !== 0) {
            setId(details.id);
            setName(details.name);
        }
    }, [details]);//This mounts when the details prop is changed

    
    const handleUpdateUser = () => {
        updateUsers({ id, name });
        setId('');
        setName('');
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
                margin: 'auto',
            }}
        >

            <Grid item xs={12} sm={12} >
                <Typography component={'h1'} sx={{ color: "#000000" }}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={12} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: "#000000",
                        marginLeft: '20px',
                        fontSize: '18px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type='number'
                    id='id'
                    name='id'
                    sx={{ width: '400px' }}
                    value={id}
                    //here when we type something in the input field, it will be assigned to the id variable
                    onChange={(e) => (setId(e.target.value))}
                //here we use the onChange event to assign the value to the id variable, When we type something, the setId function called and it access to value of the target object in the event, so the new value is assigned to the id variable
                />
            </Grid>

            <Grid item xs={12} sm={12} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: "#000000",
                        marginLeft: '20px',
                        fontSize: '18px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <Input
                    type='text'
                    id='name'
                    name='name'
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit ? handleUpdateUser() : handleAddUser()} //If isEdit is true, then call the updateUsers function, otherwise call the handleAddUser function
            >
                   {isEdit ? 'Update' : 'Add'} {/* If isEdit is true, then the button is Update, otherwise it is Add */}
                
            </Button>
        </Grid>
    )
}
