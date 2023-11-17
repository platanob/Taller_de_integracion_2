import React from 'react'
import Navbar from './navbar'
import {Slide} from 'react-slideshow-image';
import '../css-components/home.css'
import 'react-slideshow-image/dist/styles.css';
import oferta from '../images/ofertas.png';

const Home = () => {
  return (
    <div >
        <Navbar/>

      <div id='topH'>
        <h1>Explora nuestro catalogo!</h1>
      </div>

      <div id='slider-1'>
        <Slide>
          <div id='ss' className="each-slide-effect">
            <div style={{backgroundImage: 'url(https://images.reporteindigo.com/wp-content/uploads/2023/05/Que%CC%81-es-ser-aesthetic-co%CC%81mo-vestirse-y-que%CC%81-celebridades-e-influencers-marcan-esta-tendencia.jpg)',
                        backgroundSize:'60%', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
              
            </div>
          </div>
          <div id='ss' className="each-slide-effect">
            <div style={{backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0263/6270/8027/files/techwear-outfit_40bd9502-03e7-4652-b7ff-c2f36845f8ba.jpg?v=1637796503)',
             backgroundSize:'60%', backgroundRepeat: 'no-repeat',  backgroundPosition:'center' }}>
            </div>
          </div>
        </Slide>
      </div>


      <div id='midH'>

        <img id='oferta' src={oferta} ></img>
      <div id='slider-2'>
        <Slide>
            <div id='ss1' className="each-slide-effect">
              <div style={{backgroundImage: 'url(https://northstar.digitag.cl/47460-Extra_large/zapatilla-hombre-compus.jpg)',
                          backgroundSize:'40%', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
              </div>
            </div>
            <div id='ss2' className="each-slide-effect">
              <div style={{backgroundImage: 'url(https://sparta.cl/media/catalog/product/d/c/dc3728-003-phsrh000.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550)',
              backgroundSize:'40%', backgroundRepeat: 'no-repeat',  backgroundPosition:'center' }}>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>  
  )

}

export default Home;