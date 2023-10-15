import React from 'react'
import Navbar from './navbar';
import '../css-components/productsNew.css';

const ProductsNew = () => {
  return (
    <div>
        <Navbar/>
        <h1>Nuevo Producto</h1>
        <form id='formulario'>
            <div className='container' id='cont'>
                <div className='form-group'>
                    <label>Nombre Producto</label>
                    <input type='email' className='form-control' placeholder='Nombre...'/>
                <div/>
                <div className='form-group'>
                    <label>Categoria</label>
                    <input type='password' className='form-control' placeholder='Categoria...'/>
                </div>
                <div className='form-group'>
                    <label>Precio</label>
                    <input type='' className='form-control' placeholder='Precio...'/>
                </div>
                <div className='form-group'>
                    <label>Talla</label>
                    <input type='' className='form-control' placeholder='Talla...'/>
                </div>
                <div className='form-group'>
                    <label>Género</label>
                    <input type='' className='form-control' placeholder='Genero...'/>
                </div>
                <div className='form-group'>
                    <label>Marca</label>
                    <input type='' className='form-control' placeholder='Marca...'/>
                </div>
                <div className='form-group'> 
                    <label>Código</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div className='form-group'>
                    <label>Disponible</label>
                    <div class="form-check form-check-inline" id='casilla'>
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Si</label>
                    </div>
                    <div class="form-check form-check-inline" >
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
                </div>
            </div>
        </form>
    </div>
  )
};

export default ProductsNew;