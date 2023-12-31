import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
// Estado data que almacenará los datos de los productos
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Realiza una peticion GET a la URL de la API de productos en el servidor Flask.
    axios.get("https://backbanana.onrender.com/productos").then((res) => 
    // Actualiza el estado con los datos de la respuesta
    setData(res.data));
  }, []);

  return <dataContext.Provider value={{ data,setData, cart,setCart }}>{children}</dataContext.Provider>;
};

// Exporta el componente DataProvider
export default DataProvider;