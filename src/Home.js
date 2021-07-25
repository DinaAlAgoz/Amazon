
import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {

    return (
     <div className="container">
     <div className='home' >
         <img alt='text' className='homeImage'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

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