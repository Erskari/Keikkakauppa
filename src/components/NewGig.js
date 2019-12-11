import React from 'react';
import '../App.css';
 
const NewGig = ({newArtist, newEvent, newEventAd, newDescription, newDate, newAddress, newCity, newTicketsUrl, newMusicStyle, newArtistUrl, setNewArtist, setNewEvent, setNewEventAd, setNewDescription, setNewDate, setNewAddress, setNewCity, setNewTicketsUrl, setNewMusicStyle, setNewArtistUrl, submitHandler}) => {
    return (
        <div>
            <form onSubmit = {e=> submitHandler(e)}>
            Artist: <input type="text" onChange={e=> setNewArtist(e.target.value)}
            placeholder="Artist" value={newArtist}/>
            <br></br>
            Event: <input type="text" onChange={e=> setNewEvent(e.target.value)}
            placeholder="Event" value={newEvent}/>
            <br></br>
            Event Ad: <input type="text" onChange={e=> setNewEventAd(e.target.value)}
            placeholder="Event Ad" value={newEventAd}/>
            <br></br>
            Event Description: <input type="text" onChange={e=> setNewDescription(e.target.value)}
            placeholder="Description" value={newDescription}/>
            <br></br>
            Date (2000-01-31):  <input type="text" onChange={e=> setNewDate(e.target.value)}
            placeholder="Date" value={newDate}/>
            <br></br>
            Address: <input type="text" onChange={e=> setNewAddress(e.target.value)}
            placeholder="Address" value={newAddress}/>
            <br></br>
            City: <input type="text" onChange={e=> setNewCity(e.target.value)}
            placeholder="City" value={newCity}/>
            <br></br>
            Tickets URL: <input type="text" onChange={e=> setNewTicketsUrl(e.target.value)}
            placeholder="Tickets URL" value={newTicketsUrl}/>
            <br></br>
            Music Style: <input type="text" onChange={e=> setNewMusicStyle(e.target.value)}
            placeholder="Music Style" value={newMusicStyle}/>
            <br></br>
            Artist URL: <input type="text" onChange={e=> setNewArtistUrl(e.target.value)}
            placeholder="Artist URL" value={newArtistUrl}/>
            </form>
        </div>
    )
}
 
export default NewGig;