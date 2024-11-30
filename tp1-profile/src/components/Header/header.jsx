import React,{Component} from "react";
import Logo from './image.jpg';


function Header() {
  
  return (
 
    <header>
      <div className='photologo'>
      <img src={Logo} alt="Logo" className='img1'/>
      <div className="titre">
      <h1 className='ferstH'>Bienvenue a votre espace </h1>
      </div>
      </div>
    </header>
  );
}
export default Header ;