import React from 'react';
import gigService from '../services/gigs';

const Gig = ({gig}) => {
    return (
        <div>
            <h2> {gig.artist} </h2>
            <img src={gig.eventAd} alt="band"/>
            <p>Event: {gig.event}</p>
            <p>Description: {gig.eventDescription}</p>
            <p>Date: {gig.date}</p>
            <p>Address: {gig.address}</p>
            <p>City: {gig.city}</p>
            <p>Music style: {gig.musicStyle}</p>
            <a href={gig.ticketsUrl}>Tickets</a>
        </div>
        )
}

const Gigs = ({gigs, setGigs}) => {
return (
    <div className="part">
        <ul className="gigs">
            {gigs.map(gig => <Gig gig={gig} key={gig.id} />)}
        </ul>
    </div>
    )
}
export default Gigs;