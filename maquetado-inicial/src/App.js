import './App.css';
import Login from "./components/login.jsx";
import Register from './components/register';
import Products from './components/products';
import Home from './components/home';
import ProductsAdmin from './components/productsAdmin';
import ProductsNew from './components/productsNew'; 
import Carrito  from './components/Carrito/carrito';
import DataProvider from './components/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsEdit from './components/productsEdit.jsx';


function App() {
  return (
    <div className="App">
        <DataProvider>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/productsAdmin' element={<ProductsAdmin/>}></Route>
                <Route path='/productsNew' element={<ProductsNew/>}></Route>
                <Route path='/productsEdit/:_id' element={<ProductsEdit/>}></Route>
                <Route path='/carrito' element={<Carrito/>}></Route>
            </Routes>
          </BrowserRouter>
        </DataProvider>
    </div>
  );
}

export default App;
