import React from 'react';


function AddUser() {
    const addUserHandler = (event)=>{
        event.preventDefault();
    }
    return (
        <div>
           <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username'/>
            <label htmlFor='age'>Age</label>
            <input type='number' id='age'/>
            <button type='submit'>Add User</button>
            </form> 
        </div>
    )
}

export default AddUser
