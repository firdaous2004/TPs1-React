import React from 'react';


function Hea() {
  return (
    
   <div >
    <header>
        <h1>My E-commerce Store</h1>
     <nav className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>

      <div className="buttons">
        <button>Sign In</button>
        <button>Log In</button>
      </div>
      </header>
      </div>
    
  );
}

export default Hea;