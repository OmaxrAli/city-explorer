import React, { Component } from 'react'
import axios from 'axios';
import Image from 'react-bootstrap/Image'

export class App extends Component {

  constructor(props){
    super(props);

    this.state={

      locationResult: {},
      locationName : '',
      show: false,
      key : 'pk.8d57889cc9cd17bdc8c659243ff3f0f8'

    }
  }
  location= async (event) =>{
  event.preventDefault();
  
  await this.setState({
     
      locationName : event.target.fname.value,
      
    })
    

  
  
   let URLlocation =`https://us1.locationiq.com/v1/search.php?key=${this.state.key}&q=${this.state.locationName}&format=json`;
  
   let locaResult =await axios.get(URLlocation) ;

     console.log(locaResult); 
    await this.setState({
      locationResult : locaResult.data[0],
      show: true
      
    })
    
    
  }

  render() {
    return (
      <div>
        
          
        <h2>Location IQ</h2>
        <form onSubmit={this.location} >Locatio Name
        <input type="text" name="fname"/>
        <input type="submit" value='explore location'/>
        </form>
        {this.state.show &&
        <>
        <p>City Name : {this.state.locationName}</p>
        <p>latitude :  {this.state.locationResult.lat}</p>
        <p>longitude : {this.state.locationResult.lon}</p>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=${10}`} fluid />
        
        </>
        }
      </div>
      
    )
  }
}

export default App


