

import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'


function Checkout() {

    return(

        <div className ='checkout'>
            <div className='checkoutleft'>
               <div>
                   <h2 className='checkouttittle'> Your Shopping Basket is Empty!</h2>
                   <p>You have no items in your Basket , Buy now ..</p>
               </div>
            </div>
            <div className='checkoutright'>
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout