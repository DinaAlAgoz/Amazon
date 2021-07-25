import React from 'react'
import './Product.css'
import StarRateIcon from "@material-ui/icons/StarRate";

import{ useStateValue } from './StateProvider';



function Product({tittle,price,rating,image}) {
    
  const [{basket} , dispatch  ] = useStateValue();

    console.log('Basket content' , basket);

    const addToBasket = () => {
        dispatch({
        type : 'ADD-TO-BASKET',
        item: {
            tittle: tittle,
            price:price,
            rating:rating,
            image:image
        
        },
     });
  }
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
                       .map(( _ , i) => (
                        <StarRateIcon />
                       ))
                   }
               </div>
           </div>
           <img src={image} alt="" />
           <button onClick={addToBasket} className="btnbasket">Add to Basket!</button>
       </div>
    )
        
      }  
        
    
export default Product