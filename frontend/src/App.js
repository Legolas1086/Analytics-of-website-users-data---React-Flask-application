import React from 'react'
import axios from 'axios'
import { base64StringToBlob } from 'blob-util';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      img:"",
      message:"hi"
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    axios.get('/demo').then((response)=>{
      const Blob = base64StringToBlob(response.data.imageString,'image/png')
      console.log(Blob)
      return Blob
    }).then((Blob)=>{
      const reader = new FileReader()
      reader.readAsDataURL(Blob)
      reader.onloadend=()=>{
        this.setState({img:URL.createObjectURL(Blob)})
      }
    })
      
    


  }
  render(){

    return(
      <div>
        <button onClick={this.handleClick}>request</button>
        <h1>{this.state.message}</h1>
        <img src = {this.state.img}/>
      </div>
    )
  }

}


export default App;