import React from 'react'
import axios from 'axios'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      message:"hi"
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    axios.get('/demo',{
      params:{
        "message":"send"
      }
    }).then((response)=>{this.setState({message:response.data})})


  }
  render(){

    return(
      <div>
        <button onClick={this.handleClick}>request</button>
        <h1>{this.state.message}</h1>
      </div>
    )
  }

}


export default App;