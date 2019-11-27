import React, {useState, useEffect} from 'react';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import images from './components/ImageData';
import Gigs from './components/Gigs';
import gigService from './services/gigs';
const navlinks = ["Tampere", "Turku", "Helsinki"];

const  App =() => {
const [gigs, setGigs] = useState([]);
const [oldGigs, setOldGigs] = useState(false);

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
        <MyNavbar links={navlinks} oldGigs={oldGigs} setOldGigs={setOldGigs}/>
      </nav>
      {oldGigs && <Gigs gigs={gigs} setGigs={setGigs} />}
      {!oldGigs && <h2>Menneet keikat</h2>}
      <section>
        <MyCarousel images={images}/>
      </section>
    </div>
  );
}

export default App;
