import React from 'react'
import './login.css';
import { Link } from 'react-router-dom'


function Login() {

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
                   
                   <input type='email' />
                   <h5>Password</h5>
                   <input type='password'/ >
                       <button type='submit' className ='loginsignINButton' >Sign In</button>
               </form>

               <p>By Siging-in, you agree to Amazon's Terms and Conditions</p>
               <button className='loginRegisterButton'>Create Your Amazon Account</button>
           </div>
        </div>
    )

}


export default Login;