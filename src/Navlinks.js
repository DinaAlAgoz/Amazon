import React from 'react';
import './Navlinks.css';
import { Link } from 'react-router-dom';

function Navlinks(){

    return (

    <div className="navlinks">

        <div className="navlinksouter">
            <div className="navlinksinner" >
            <Link> Today's Deals </Link>
            <Link> Customer Service </Link>
            <Link> Gift Crads </Link>
            <Link> Registry </Link>
            <Link> Sell </Link>




            </div>
           
            
            </div>

     </div>
    )
  }

export default Navlinks