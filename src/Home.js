
import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {

    return (
     <div className="container">
     <div className='home' >
         <img alt='text' className='homeImage'
          src="https://m.media-amazon.com/images/S/sonata-images-prod/null/84abb678-22dc-43c9-aefb-fa921c9e7a52._UR3000,600_SX1500_FMjpg_.jpeg"/>

        <div className='home-row'>
            <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={11.69}
                rating={4}
                image ="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/contemporaryv2._V519740116_.jpg"
            />
            <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={99.63}
                rating={4}
                image ="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/shoesv2._V519734627_.jpg"
            />
                <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={55.87}
                rating={4}
                image ="https://m.media-amazon.com/images/I/61ViOMIUhmL._AC_UL320_.jpg"
                />
             </div>
        


        <div className='home-row'>
            <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={11.69}
                rating={4}
                image ="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/contemporaryv2._V519740116_.jpg"
            />
            <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={99.63}
                rating={4}
                image ="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/shoesv2._V519734627_.jpg"
            />
                <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={55.87}
                rating={4}
                image ="https://m.media-amazon.com/images/I/61ViOMIUhmL._AC_UL320_.jpg"
                />

               <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={55.87}
                rating={4}
                image ="https://m.media-amazon.com/images/I/61ViOMIUhmL._AC_UL320_.jpg"
                />
             </div>


             <div className='home-row'>
            <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={11.69}
                rating={4}
                image ="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/contemporaryv2._V519740116_.jpg"
            />
            <Product
                id="121314"
                tittle="The Len StartUp : How Contact Imnotaion"
                price={99.63}
                rating={4}
                image ="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/shoesv2._V519734627_.jpg"
            />
            

             </div>
      

    
     </div>
     </div>
    )
}

export default Home