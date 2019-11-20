import React, {useState, useEffect} from 'react';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import images from './components/ImageData';
//import Gigs from './components/Gigs';
import gigService from './services/gigs';
const navlinks = ["Tampere", "Turku", "Helsinki"];


const  App =() => {
const [gigs, setGigs] = useState([]);

const getGigs = () => {
  gigService.getAll()
  .then(allGigs => {
    setGigs(allGigs);
  })};
  useEffect(getGigs, []);
  console.log(gigs);
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
      <Gigs gigs={gigs} setGigs={setGigs} />
    </div>
  );
}

export default App;
