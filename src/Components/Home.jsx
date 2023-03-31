import React from "react";
import logo from './../imagenes/logo.png'
import img from './../imagenes/AM 2023 - 940 x 788.png'
import './Home.css'
import { BsFacebook } from 'react-icons/bs';



export default function Home(){
    return(
      <div>

      {/*---Nav----*/}
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src={logo} alt='Accion Mar Platense' className="imglogo"/>
        </a>
        
      </div>
    </nav>  

      {/*---Body----*/}
      <div>
        <img src={img} alt="Accionmarplatense" className="img"/>
      </div>
      

      {/*---Footer---*/}
      <div className="footer">
        <a href="https://www.facebook.com/people/Plan-de-Escucha-Vecinal/100090977302524/"><BsFacebook className="facebook"/></a>
        </div>
        <div>
        <p>© Copyright - All rights reserved.</p>
      </div>
      </div>
    )
}