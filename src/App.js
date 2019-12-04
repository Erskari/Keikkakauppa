import React, {useState, useEffect} from "react";
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Gigs from './components/Gigs';
import gigService from './services/gigs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const navlinks = ["Tampere", "Turku", "Helsinki"];

export default function App() {
    const [oldGigs, setOldGigs] = useState(false);
    const [gigs, setGigs] = useState([]);
    const [newGigg, setNewGig] = useState("");

    const newGig = gigs.filter(k => {const gigDate = new Date(k.date); 
        return new Date(k.date) >= new Date()});

    const oldGig = gigs.filter(k => {const gigDate = new Date(k.date); 
        return new Date(k.date) < new Date()});
        
    const getGigs = () => {
        gigService.getAll()
        .then(allGigs => {
        setGigs(allGigs);
        })};
        useEffect(getGigs, []);
    const addGig = event => {
        const now = new Date();
        event.preventDefault();
        const testGig = {
            content: newGigg,
            date: now.toISOString(),
            
        };
        gigService.add(testGig)
        .then(gig => {
        let tempGigs = gigs.concat(gig);
        setGigs(tempGigs);
        setNewGig("");
        
        })
    }
  return (
    <Router>
      <div>
        <nav>
        <MyNavbar links={navlinks} oldGigs={oldGigs} setOldGigs={setOldGigs}/>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/oldgigs">
          {<div><h2>Menneet keikat</h2><Gigs gigs={oldGig} setGigs={setGigs} /></div>}
          </Route>
          <Route path="/gigs">
          {<div><h2>Tulevat keikat</h2><Gigs gigs={newGig} setGigs={setGigs} /></div>}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}