import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import AuthContext from '../../store/Auth-Context';
import { useNavigate } from 'react-router-dom';


function VerifyEmail(props) {
    const authCtx=useContext(AuthContext);
    const history=useNavigate();
    const logoutHandler=()=>{
        authCtx.logout();
        history('/');
        localStorage.removeItem('userEmail')
    }
    //const[notification,setNotification] = useState('Please Verify your email to proceed')
    const emailConfirmationHandler= async()=>{
        try{
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDdFFH3PYqzMJ8Frau8Bcz5lS2GLl8LH-Q'
            ,{
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("token"),
            }
        );
        
        alert('Please Check your Inbox and Verify email adress')
        }
        catch(e){
            alert(e.response.data.error.message)
        }
    }
    return (
        <Container style={{backgroundcolor:'blue'}}>
           <h2>EMAIL CONFIRMATION</h2> 
           <div>
            <Button variant='outline-info' onClick={emailConfirmationHandler}>Verify</Button>
            <Button onClick={logoutHandler}>Logout</Button>
           </div>
        </Container>
    );
}

export default VerifyEmail;