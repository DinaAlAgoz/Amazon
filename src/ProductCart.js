

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
              <p>{tittle}</p>
              <p> ${price}</p>
          </div>
          <div>
      {
        

        Array(rating)
        .fill()
        .map((_) => (

            <p>*</p>
        ))

      }

      </div>
      <button onClick ={removeitem}>Remove From the Cart</button>
      </div>

  )

}


export default ProductCart