import { useState } from 'react';
import './App.css';
import ContactInfo from './components/ContacInfo.js';
import Image from './components/Image.js'
import Carousel from './components/Carousel.js';

function App() {
  //        <img src={logo} className="App-logo" alt="logo" />
  const [images,setImages] = useState([
    "LBalicate.jpeg",
    "LBcalibre.jpeg",
    "LBcintraMetrica.jpeg",
    "LBcutter.jpeg",
    "LBdestornillador.jpeg",
    "LBdiscoMadera.jpeg",
    "LBjuegoDiscos.jpeg",
    "LBllaveMandril.jpeg",
    "LBllaves.jpeg",
    "LBmartillo.jpeg",
    "LBniveles.jpeg",
    "LBsierrita.jpeg",
    "LBzapatillas.jpeg"
  ]);


  return (
    <div className="App">
      <header className="App-header">

        <Image urlImg="LBlogo.jpeg"/>
        Artículos de ferretería

        <Carousel listImages={images}/> 

        Proveedores La Bestia
        <ContactInfo/>
      </header>
    </div>
  );
}

export default App;