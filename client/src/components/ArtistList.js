// client/components/ArtistList.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArtistList extends Component {
    
    render() {
        return (
            <div>
                <h1>All Artists</h1>
                {this.props.artists.map(artist => (
                    <div key={artist.id}>
                        <Link to={`/artists/${artist.id}`} >{artist.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArtistList