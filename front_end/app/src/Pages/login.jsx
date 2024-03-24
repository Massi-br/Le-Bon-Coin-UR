import React from 'react'
import "./css/auth.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-light'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>
                Connexion
            </h3>
            <div className='mb-2'>
                <label htmlFor='email'> Email</label>
                <input type='email' placeholder='entrez votre email...' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'> Mot de passe</label>
                <input type='password' placeholder='entrez votre mot de passe...' className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>
                      Connexion
                </button>
            </div>
            <p className='text-end mt-2'>
                    <a href='/'> mot de passe oublié ?</a> <Link to="signup" className='ms-2'>s'inscrire</Link>
            </p>
        </form>
        </div>
       
    </div>
  )
}

export default Login