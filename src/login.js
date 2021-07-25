import React from 'react'
import './login.css';
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'
import { useState } from 'react';


function Login() {
    const history = useHistory();   
    const [useremail , setUserEmail] = useState('')
    const [userpassword , setUserpasword] = useState('')

    const loginUser = event => {

        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then ((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }


    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth => {
            history.push('/');

        })
        .catch(e => alert(e.message))
    }




    return(
        <div className='login'>
            <Link>
            <img alt='' className='login-logo'
            src ="amazon.png"
             />
            </Link>
           <div className='logincontainer'>
               <h1>Sign In</h1>
               <form>
                   <h5>E-mail</h5>
                   
                   <input value={useremail} onChange={event => setUserEmail(event.target.value)} type='email' />
                   <h5>Password</h5>
                   <input value={userpassword} onChange ={event => setUserpasword(event.target.value)} type='password'/ >
                       <button onClick={loginUser}   type='submit' className ='loginsignINButton' >Sign In</button>
               </form>

               <p>By Siging-in, you agree to Amazon's Terms and Conditions</p>
               <button  onClick={signupuser}  className='loginRegisterButton'>Create Your Amazon Account</button>
           </div>
        </div>
    )


   

}


export default Login;