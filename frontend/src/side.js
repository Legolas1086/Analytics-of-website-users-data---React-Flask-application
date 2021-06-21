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
    }

    render(){
        const active_style={
            backgroundColor:"rgb(209, 234, 237)",
            padding:"1rem",
            borderTopRightRadius:"50px",
            borderBottomRightRadius:"50px",
            color:"blue"

        }

        return(
            <div className="Side_bar">
                <Link to="/" name="home" style={this.state.active=="home"? active_style:null} onClick={this.handleClick}>Home</Link>
                <Link to="/future" name="future" style={this.state.active=="future"? active_style:null} onClick={this.handleClick}>Future</Link>
                <Link to="/visualise" name="visualise" style={this.state.active=="visualise"? active_style:null} onClick={this.handleClick}>Visualise</Link>
                <Link to="/countries" name="countries" style={this.state.active=="countries"? active_style:null} onClick={this.handleClick}>Countries</Link>
            </div>
        )
    }
}


export default Side;