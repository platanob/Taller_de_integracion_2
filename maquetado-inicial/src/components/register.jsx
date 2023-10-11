import Navbar from './navbar'

const Register = () => {
    const makerEQUEST = async () => {
        const nombre = document.querySelector('input[placeholder="Name"]').value;
        const correo = document.querySelector('input[placeholder="Email"]').value;
        const telefono = document.querySelector('input[placeholder="Telefono"]').value;
        const rut = document.querySelector('input[placeholder="RUT"]').value;
        const direcion = document.querySelector('input[placeholder="Direccion"]').value
        const contra = document.querySelector('input[placeholder="Password"]').value

        const datos = {
          nombre: nombre,
          correo: correo,
          telefono: telefono,
          rut: rut,
          direccion : direcion,
          contra : contra
        };
      
        try {
          const res = await fetch("http://127.0.0.1:5000/registro", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          });
      

      // Verificar el estado de la respuesta
      if (res.status === 200) {
        // Si la solicitud fue exitosa (estado 200), leer la respuesta en formato JSON
        const data = await res.json();
        // Hacer algo con los datos de la respuesta, por ejemplo, mostrarlos en la consola
        console.log("Respuesta del servidor:", data);
      } else {
        // Si la solicitud no fue exitosa, mostrar un mensaje de error
        console.error("Error en la solicitud. Estado:", res.status);
      }
    } catch (error) {
      // Capturar errores de red u otros errores relacionados con la solicitud
      console.error("Error al enviar la solicitud:", error);
    }
      };
      const handleSubmit = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente
        makerEQUEST(); // Llamar a la función makerEQUEST cuando se presiona el botón
      };
      
  return (
    <div>
    <Navbar/>
        <div>
            <h1>Crea una cuenta!</h1>
        </div>
    <form id='formulario' onSubmit={handleSubmit}>  

        <div className='container' id='cont'>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className='form-control' placeholder="Name"/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' aria-describedby='email-help' placeholder='Email'/>
            <div/>
            <div className='form group'>
                <label>RUT</label>
                <input type="text" className="form-control" placeholder="RUT"/>
            </div>
            <div className='form group'>
                <label>Direccion</label>
                <input type="text" className="form-control" placeholder="Direccion"/>
            </div>
            <div className='form group'>
                <label>Telefono</label>
                <input type="text" className="form-control" placeholder="Telefono"/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' placeholder='Password'/>
                <label>Confirm Password</label>
                <input type='password' className='form-control' placeholder='Password'/>
            </div>
                <button id='boton-login' type="submit" className="btn btn-dark">Enter</button>
            </div>
        </div>
    </form>

</div>
  )
}



export default Register;