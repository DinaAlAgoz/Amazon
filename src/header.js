import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
//import { SportsBasketball } from '@material-ui/icons';
import {auth}from './firebase'
import { useEffect } from 'react';


function Header(){
   
  const [{loggedinuser, basket}, dispatch] = useStateValue();

  // console.log( "My Basket" ,basket);

  const logoutUser = () => {
    if(loggedinuser) {
        auth.signOut();
    }
  }


  useEffect(()=>{
    console.log(loggedinuser)
    console.log(basket)
  },[])

    return(
      
        <nav className='header'>
          
            <img className='header-logo' alt='logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            <div className='header-search' >
                <input type='text' className='header-inputsearch' />
                <SearchIcon className='header-searchIcon' />
            </div>
            <div className="header-nav">
            {/*1st link  */}
         <Link to ={!loggedinuser && "/login"} className='header-link'>
            <div onClick={logoutUser} className ='header-option'>
               <span className='header-option-one'> Hello,{/*loggedinuser.email*/}</span>
                {/* <span className='header-option-two'> {loggedinuser? 'Signout':'Sign In'} </span> */}
             </div>
            </Link>

          {/*2st link  */}
        <Link to ='/' className='header-link'>
            <div className ='header-option'>
                <span className='header-option-one'>  Returns</span>
                <span className='header-option-two'> & Orders </span>
             </div>
            </Link>


              {/*3st link  */}
       

            </div>
             {/*Basket icon number */}
            <Link to ='/checkout' className='header-link'>
                <div className='header-optionbasket'>
                <ShoppingBasketIcon />

                 {/* number of items in the basket */}
                 <span className='header-option-two header-productCount'>{basket.length}</span>
               
                </div>
            </Link>
        </nav>
    )
}

export default Header