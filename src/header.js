import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './header.css'
import { Link } from 'react-router-dom'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header(){

    return(

        <nav className='header' >
          
            <img className='header-logo' alt='logo' src='amazon.png'/>
            <div className='header-search' >
                <input type='text' className='header-inputsearch' />
                <SearchIcon className='header-searchIcon' />
            </div>
            <div className="header-nav">
            {/*1st link  */}
         <Link to ='/' className='header-link'>
            <div className ='header-option'>
                <span className='header-option-one'> Hello User</span>
                <span className='header-option-two'> SignIn SignOut </span>
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
        <Link to ='/' className='header-link'>
            <div className ='header-option'>
                <span className='header-option-one'> Yours </span>
                <span className='header-option-two'> Prime </span>

             </div>
            </Link>

            </div>
             {/*Basket icon number */}
            <Link to ='/checkout' className='header-link'>
                <div className='header-optionbasket'>
                   <ShoppingBasketIcon />

                 {/* number of items in the basket */}
                 <span className='header-option-two header-basketCount'>2</span>

                </div>
            </Link>
        </nav>
    )
}

export default Header