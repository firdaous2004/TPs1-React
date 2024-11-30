import React from 'react';
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";
import Profile from "./components/Content/profil";

import "./styles.css";



function App() {
  return (
    <div>
    <Header/>
    <Navigation/>
    <Profile/>
    <Footer />
    </div>
  );
}

export default App;