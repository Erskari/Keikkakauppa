import React from 'react';
import gigService from '../services/gigs';

const Gig = ({gig}) => {
    return (
        <div>
            <li> {gig.artist}</li>
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