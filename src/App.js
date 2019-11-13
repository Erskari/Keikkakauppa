import React from 'react';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import images from './components/ImageData';
const navlinks = ["Tampere", "Turku", "Helsinki"];

const  App =() => {
  return (
    <div className="App">
      <header>
      </header>
      <nav>
        <MyNavbar links={navlinks}/>
      </nav>
      <section>
        <MyCarousel images={images}/>
      </section>
    </div>
  );
}

export default App;
