import React, { useState } from 'react';
import "./AddUser.css";
import Card from '../UI/Card';
import Button from '../UI/Button';


function AddUser(props) {
    const [enteredUsername,setEnteredUsername] = useState("");
    const [enteredAge,setEnteredAge] = useState("");
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 ||enteredAge<=0){
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }

    const usernameChangeHandler =(event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
    }
    return (
        <Card className="input">
           <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age</label>
            <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler}/>
            <Button type='submit'>Add User</Button>
            </form> 
        </Card>
    )
}

export default AddUser
