import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const InfoContext = createContext();

const InfoProvider = ({children}) => {
    const Navigate = useNavigate();
    const [user, setuser] = useState({});
    const [stuReq,setstuReq] = useState([]);
    const [teacherRes,setteacherRes] = useState([]);
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setuser(userInfo);
        // if(!userInfo) Navigate('/')
    },[Navigate])
  return (
   <InfoContext.Provider value={{user,setuser,stuReq,setstuReq,teacherRes,setteacherRes}}>
    {children}
   </InfoContext.Provider>
  )
}

export {InfoContext};
// export const InfoState = ()=>{
//     return useContext(InfoContext);
// }

export default InfoProvider
