

import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'







function Checkout() {

    const [{basket}] = useStateValue();
    return(

        <div className ='checkout'>
            <div className='checkoutleft'>
                {

                    basket.length ==0 ? (

                    <div>
                    <h2 className='checkouttittle'> Your Shopping Basket is Empty!</h2>
                    <p>You have no items in your Basket , Buy now ..</p>
                </div>
                    ) : (

                        <div>
                            <h2 className ="shoppingbaskettittle">Items in the Basket</h2>

                            {
                                basket.map(item => (

                                   < ProductCart

                                   id={item.id}
                                   tittle={item.tittle}
                                   image={item.image}
                                   price={item.price}
                                   rating={item.rating}

                                   />
                                ))
                            }

                        </div>

                    )
                }
               
            </div>
            <div className='checkoutright'>
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout