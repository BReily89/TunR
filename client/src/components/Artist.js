import React, {Component} from 'react'
import axios from 'axios'
import Song from './Song'

class Artist extends Component {

    state = {
        artist: {},
        songs:[]
    }

    async componentWillMount() {
        try {
            const { artist_id } = this.props.match.params
            const response = await axios.get(`/api/artists/${artist_id}`)
            this.setState({artist: response.data})
            console.log(response)
        } catch(error) {
            console.log(error)
        }
        try {
            const { artist_id } = this.props.match.params
            const response = await axios.get(`/api/artist/${artist_id}/songs`)
            this.setState({songs: response.data})
        }catch(error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <div>
                {this.state.artist.name}                    
               </div>
                <div>
                {this.state.artist.nationality}
                </div>
                <div>
                <img src={this.state.artist.photo_url} />
                </div>
                <Song songs={this.state.songs} />
               {/* <pre>{JSON.stringify(this.state.artist)}</pre> */}
            </div>
        )
    }
}

export default Artist