import Navbar from './navbar'

const Register = () => {
  return (
    <div>
    <Navbar/>
        <div>
            <h1>Crea una cuenta!</h1>
        </div>
    <form id='formulario'>

        <div className='container' id='cont'>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className='form-control' placeholder="Name"/>
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Lastname"/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' aria-describedby='email-help' placeholder='Email'/>
            <div/>

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