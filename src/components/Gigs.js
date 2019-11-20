import React from 'react';
import gigService from './services/gigs';

// HYVIN KESKEN

const Gig = ({gig}) => {
    return (
        <li onClick={e => handleChange(e, note.id)} className={textColor}> {note.content})
        )
}
return (
    <div className="part">
        <ul className="notes">
            {notes.map(note => <Gigs gig={gig} key={gig.id} />)}
        </ul>
    </div>
    )

export default App;