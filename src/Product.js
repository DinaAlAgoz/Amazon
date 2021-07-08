import React from 'react'
import './Product.css'



function Product({id,tittle,price,rating ,image}) {

    return (
       <div className="product">
           <div className="productInfo">
               <p>{tittle}</p>
               <p className="productPrice">
                   <strong>{price}</strong>
                   <small>$</small>

               </p>
               <div className="productRating">
                   {
                       Array(rating)
                       .fill()
                       .map(() => (
                           <p>*</p>
                       ))
                   }
               </div>
           </div>
           <img src ={image} alt="" />
           <button className="btnbasket">Add to Basket!</button>
       </div>
    )
}


export default Product