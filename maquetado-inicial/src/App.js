import './App.css';
import Login from "./components/login.jsx";
import Register from './components/register';
import Products from './components/products';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
