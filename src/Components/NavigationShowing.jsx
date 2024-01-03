import React, { useEffect,useState } from 'react'
import "bootstrap";
import "../App.css";
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationShowing = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const [currentPath,setcurrentPath] = useState("")

    useEffect(() => {
        setcurrentPath(location.pathname.slice(1))
    },[location.pathname])

  return (
    <div className='my-5 d-flex monteserrat mx-5'>
        <div className='d-flex' onClick={() => navigate("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" type='button' width="1.2em" height="1.2em" style={{marginTop:"1px"}} viewBox="0 0 24 24"><path fill="currentColor" d="M5 20v-8H2l10-9l4 3.6V4h3v5.3l3 2.7h-3v8h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312"></path></svg>
        <p className='mx-2' type="button" style={{color:"black"}}>Home</p>
        </div>
        <svg style={{transform:"rotate(90deg)"}} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.775l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213T12 8.4q.2 0 .375.063t.325.212l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"></path></svg>
        <p className='mx-2' style={{color:"grey"}}>{currentPath}</p>
    </div>
  )
}

export default NavigationShowing