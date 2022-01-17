import React, { Component } from 'react'
import Astronaut from './Astronaut';
import axios from 'axios';




class Astronauts extends Component {

    state = {
        people: [],
        image: ""
    };


    // const img = "https://en.wikipedia.org/w/api.php?action=query&titles=Muhammad_Ali&prop=pageimages&format=json&origin=*&pithumbsize=200"
    astrosUrl = "http://api.open-notify.org/astros.json";
    wikiUrl = "http://en.wikipedia.org/api/rest_v1/page/summary/";

    async fetchAstros() {
        const res = await axios.get(this.astrosUrl)
        this.setState({ people: res.data.people, fetched: true })
        const img = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/Pyotr_Dubrov")
        this.setState({image: img.data.originalimage.source })
    }

    
    render() {
        return (
            <div className="container my-5">
                <h3 className="text-center mb-5">Click the button below to view all astronauts currently in space:</h3>
                <button onClick={() => this.fetchAstros()} className="btn btn-secondary mb-5 w-100">See Astronauts</button>
                <p></p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                    {this.state.people.map((person, index) => {
                        return (
                            <div key={index} className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                                <img src={this.state.image} className="img-fluid card-img-top" alt="..."></img>
                                <div className="card-body text-secondary text-center">
                                    <hr />
                                    <h5 className="card-text"><i className="fas fa-user"></i> {person.name}</h5>
                                    <h5 className="card-text"><i className="fas fa-space-shuttle"></i> {person.craft}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Astronauts


