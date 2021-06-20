import React from 'react'
import styles from './css/side.css'
import { Link } from 'react-router-dom'

class Side extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }

    render(){
        return(
            <div className="Side_bar">
                <Link to="/">Home</Link>
                <Link to="/future">Future</Link>
                <a>Visualise</a>
            </div>
        )
    }
}


export default Side;