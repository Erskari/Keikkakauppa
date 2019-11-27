import React from 'react';
import gigService from '../services/gigs';

// SEMI KESKEN

const Gig = ({gig}) => {
    if (gig.date > new Date().toISOString()) {
    return (
        <div>
            <li> {gig.artist}</li>
        </div>
        )
    } else {
        return (
        <div>
            <li> {gig.artist}</li>
        </div>
        )
    }
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