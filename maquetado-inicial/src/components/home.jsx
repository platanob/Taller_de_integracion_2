import React from 'react'
import Navbar from './navbar'
import {Slide} from 'react-slideshow-image';
import '../css-components/home.css'
import 'react-slideshow-image/dist/styles.css';




const Home = () => {
  return (
    <div >
        <Navbar/>
        <header>
          <h1>Bienvenidos a Banana Shop!</h1>
        </header>

        <h3> Los productos más populares!</h3>

        <Slide >
          <div id='ss' className="each-slide-effect">
            <div style={{backgroundImage: 'url(https://images.reporteindigo.com/wp-content/uploads/2023/05/Que%CC%81-es-ser-aesthetic-co%CC%81mo-vestirse-y-que%CC%81-celebridades-e-influencers-marcan-esta-tendencia.jpg)',
                        backgroundSize:'50%', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
              
            </div>
          </div>
          <div id='ss' className="each-slide-effect">
            <div style={{backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0263/6270/8027/files/techwear-outfit_40bd9502-03e7-4652-b7ff-c2f36845f8ba.jpg?v=1637796503)',
             backgroundSize:'50%', backgroundRepeat: 'no-repeat',  backgroundPosition:'center' }}>
            </div>
          </div>


        </Slide>
    </div>  
  )
}

export default Home;