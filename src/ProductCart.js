

import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'



function ProductCart({id,tittle,image,price,rating}) {

  const [{basket},dispatch] =useStateValue();

  const removeitem = () => {

    dispatch({
        type:'REMOVE FROM THE CART',
        id: id
    })
  }

  return (
      <div className ="productCart">
          <img className="productCartImage" src = {image} alt =""/>
          <div className ="productInfo">
              <p className ="productCrattittle">{tittle}</p>
              <p className ="productPrice"> ${price}</p>
       
          <div className="paroductcartRating">
      {
        

        Array(rating)
        .fill()
        .map((_) => (
            <span>*</span>
        ))

      }

      </div>
      <button onClick ={removeitem}>Remove From the Cart</button>
      </div>
      </div>
      

  )

}


export default ProductCart