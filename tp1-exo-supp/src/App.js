import logo from './logo.svg';
import './App.css';
import './Header.css';
import  './Card.css';
import './Content.css';
import Casque from './casque.jpg';



function Hea() {
  return (
    
   <div >
    <header>
        <h1>LOGO</h1>
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
function Card({ title, description, price,image}) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-actions">
        <button className='btn1'>Add to Cart</button>
        <button className='btn2'>Buy</button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <h1>Nearest Seller</h1>
      <div className="cards-container">
        <Card
          title="Wireless bluetooth headset"
          description="Shipped in 3-4 days"
          price="$35.99"
          image={Casque}
        />
        <Card 
        title="Wireless bluetooth headset"
        description="Shipped in 3-4 days"
        price="$35.99"
        image={Casque}
         
        />
        <Card 
        title="Wireless bluetooth headset"
        description="Shipped in 3-4 days"
        price="$35.99"
        image={Casque}
         
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <Hea/>
     <Content/>

    </div>
  );
}

export default App;
