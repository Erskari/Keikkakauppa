import React, {useState, useEffect} from 'react';
import MyCarousel from './MyCarousel';
import images from './ImageData';

const  Home =() => {
  return (
    <div className="App">
      <section>
        <MyCarousel images={images}/>
      </section>
    </div>
  );
}

export default Home;
