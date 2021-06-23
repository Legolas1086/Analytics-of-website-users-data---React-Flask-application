import React from 'react'
import Side from './side.js'
import styles from './css/home.css'
import img from './static/analytics.png'

function Home(){
    return(
        <div className="Home_page">
            <img src = {img}></img>
        </div>
    )
}

export default Home;