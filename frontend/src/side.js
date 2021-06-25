import React from 'react'
import styles from './css/side.css'
import { Link } from 'react-router-dom'

class Side extends React.Component{
    constructor(){
        super()
        this.state={
            active:'home'
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(event){
        this.setState({active:event.target.name})
        console.log(this.state.active)
        const path = window.location.pathname
        console.log(path)
    }

    

    render(){
        const path = window.location.pathname
       
        const active_style={
            backgroundColor:"rgb(209, 234, 237)",
            padding:"1rem",
            borderTopRightRadius:"50px",
            borderBottomRightRadius:"50px",
            color:"blue"
        }

        return(
            
            <div className="Side_bar">
                <Link to="/" name="home" style={path=="/"? active_style:null} onClick={this.handleClick}>Home</Link>
                <Link to="/future" name="future" style={path=="/future"? active_style:null} onClick={this.handleClick}>Future</Link>
                <Link to="/visualise" name="visualise" style={path=="/visualise"? active_style:null} onClick={this.handleClick}>Visualise</Link>
                <Link to="/countries" name="countries" style={path=="/countries"? active_style:null} onClick={this.handleClick}>Countries</Link>
            </div>
        )
    }
}


export default Side;