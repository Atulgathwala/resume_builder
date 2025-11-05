import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let AUTHCONTEXTAPI = createContext();
const AuthContext = ({ children }) => {
  let [allUsers, setAllUsers] = useState([]);
  let [isAuth, setIsAuth] = useState(null);

  let getAllUsersFromDb = async () => {
    let { data } = await axios.get("http://localhost:5000/users");
 setAllUsers(data);

    
  };

  useEffect(() => {
    getAllUsersFromDb();
  }, []);

  useEffect(()=>{

    let tokenid = window.localStorage.getItem("USERTOKEN");
    if(tokenid){
      console.log("user token", tokenid)
      let myUser = allUsers.find((user)=>{
        return user.id==tokenid
      })

  setIsAuth(myUser)
    }
  },[allUsers]);



  let signUp = async (payload) => {
   let isUserPresent = allUsers.find((user)=>{
      return user.email==payload.email;
    })

    if(!isUserPresent){
try {
      let data = await axios.post("http://localhost:5000/users", payload);
      toast.success("Registration successfull");
    } catch (error) {
      toast.error(error.message);
    }
    }

    else{
      toast.error("User already Exists")
    }
    
  };

  // ? Login Function

  let login = (payload) => {
  
   let myUser = allUsers.find((user)=>{
    return user.email==payload.email;
   });

  if(!myUser){
    toast.error("User not found");
    return;
  }
  if(myUser.password==payload.password){
    toast.success("Logged in successfully");
    setIsAuth(myUser);
    window.localStorage.setItem("USERTOKEN",myUser.id)
  }

  };
  // ? logout


  let logout = ()=>{

    setIsAuth(null);
    window.localStorage.clear();
    window.location.assign("/");
  }


  return (
    <AUTHCONTEXTAPI.Provider value={{ signUp, login , isAuth, logout }}>
      {children}
    </AUTHCONTEXTAPI.Provider>
  );
};

export default AuthContext;
