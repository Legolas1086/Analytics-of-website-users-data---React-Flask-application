import React from 'react'
import axios from 'axios'
import { base64StringToBlob } from 'blob-util';
import styles from './css/App.css'
import Nav from './nav.js'
import Side from './side.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Future from './future';
import Home from './home';
import Visualise from './visualise';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      img:"",
      message:"hi"
    }
  }
  
    
  render(){

    return(
      <Router>
        <div>
          <Nav/>
          <div className="Body">
            <Side/>
            <div className="Content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/future" component={Future}/>
                <Route exact path="/visualise" component={Visualise}/>
              </Switch>
              
            </div>
          
          </div>
        
        </div> 
      </Router>
      
    )
  }

}


export default App;