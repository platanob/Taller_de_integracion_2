import Navbar from './navbar'

const Register = () => {
    const makerEQUEST = async () => {
        const name = document.querySelector('input[placeholder="Name"]').value;
        const lastName = document.querySelector('input[placeholder="Lastname"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;
      
        const datos = {
          nombre: "benja",
          correo: "k@k.k",
          telefono: "1234",
          rut: "123",
          direccion : "kkk",
          contra : "123"
        };
      
        try {
          const res = await fetch("http://127.0.0.1:5000/registro", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          });
      
          // Aquí puedes manejar la respuesta del servidor si es necesario
          // por ejemplo, mostrar un mensaje al usuario
          <div className='toast' role='alert' aria-aria-live='assertive' aria-atomic='true'>
              <div className='toast-header'>
                  <img />
                  <strong className='mr-auto'>BananaShop</strong>
                  <button type='button' className='ml-2 mb-1 close' data-dimiss='toast' aria-label='close'/>
                   <span aria-hidden='true'>&times;</span>
              </div>
              <div className='toast-body'>
                Registrado correctamente!
            </div>
          </div>

        } catch (error) {
          <div className='toast' role='alert' aria-aria-live='assertive' aria-atomic='true'>
              <div className='toast-header'>
                  <img />
                  <strong className='mr-auto'>BananaShop</strong>
                  <button type='button' className='ml-2 mb-1 close' data-dimiss='toast' aria-label='close'/>
                   <span aria-hidden='true'>&times;</span>
              </div>
              <div className='toast-body'>
                Error!
            </div>
          </div>
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