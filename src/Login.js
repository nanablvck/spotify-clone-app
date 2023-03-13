import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';
import logo from './Spotify_logo.png';

function Login() {
  return (
    <div className='login'>

        <img src={logo} alt='logo'/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  )
}

export default Login