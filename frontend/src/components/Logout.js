import React from 'react';
import{ useNavigate} from 'react-router-dom'
import {  MenuItem } from "@chakra-ui/react";

const Logout = () => {
  const Navigate = useNavigate()
    const logoutHandler = ()=>{
        localStorage.removeItem('userInfo');
        Navigate('/');
    }
  return (
    <>
    
        <MenuItem  onClick={logoutHandler}>Log out</MenuItem>
   
    </>
  );
}

export default Logout
