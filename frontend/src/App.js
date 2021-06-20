import React from 'react'
import axios from 'axios'
import { base64StringToBlob } from 'blob-util';
import styles from './css/App.css'
import Nav from './nav.js'
import Side from './side.js'


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
    axios.get('/demo',{params:{"key":"phrophecy"}}).then((response)=>{
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
        <Nav/>
        <div className="Body">
          <Side/>
          <div className="Content">
            <button onClick={this.handleClick}>request</button>
            <img src = {this.state.img}/>
          </div>
          
        </div>
        
      </div>
    )
  }

}


export default App;