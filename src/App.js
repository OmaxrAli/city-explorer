import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  constructor(props){
    super(props);

    this.state={

      locationResult: {}

    }
  }

  location=()=>{

    let URLlocation =`https://us1.locationiq.com/v1/search.php?key=pk.8d57889cc9cd17bdc8c659243ff3f0f8&q=amman&format=json`;


   let locationResult = axios.get(URLlocation) ;
    console.log(locationResult);
    
  }

  render() {
    return (
      <div>
        <h2>Location IQ</h2>
        <button onClick={this.location}>Get location</button>
      </div>
    )
  }
}

export default App


