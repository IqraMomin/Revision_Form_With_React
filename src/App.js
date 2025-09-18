import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList,setUsersList] = useState([]);
  const addUserHandler = (uName,Uage)=>{
    setUsersList(prevUsersList=>{
      return [...prevUsersList,{name:uName,age:Uage,id:Math.random().toString()}]
    })
  }
  return (
   <div>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
   </div>
  );
}

export default App;
