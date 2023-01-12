import React, { createContext,useState, useEffect } from "react";
import { LoginAction } from "../actions/LoginAction";
import Swal from 'sweetalert2'

const UserContext=createContext();

const UserProvider=({children})=>{
    const [user, setUser]=useState(null)
    const [peliculasFav, setPeliculasFav]=useState([])
    const [darkMode, setDarkMode]=useState(true)
    
    const login=async (puser)=>{
        const res=await LoginAction(puser)
        if (res!=null) {
            setUser(res)
            
            sessionStorage.setItem('user', JSON.stringify(res))
            localStorage.setItem('darkmode', darkMode)
            return true;
        }
        return false;
    }
    const logout=()=>{
        setUser(null)
        sessionStorage.removeItem('user')
        localStorage.removeItem('darkmode')
    }
    const update=()=>{

    }
    const data={user, login, logout, update}
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext