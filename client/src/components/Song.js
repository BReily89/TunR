import React, { Component } from 'react';
import axios from 'axios'

const Song = (props) => {
    return (
        <div>
            {
                props.songs.map((song) => {
                    return (
                        <div>
                        
                        {song.title}
                            <audio controls src = {song.preview_url} />
                        </div>
                    )
                })
            }
        </div>
    );
};
export default Song