import React from 'react'
import axios from 'axios'
import { base64StringToBlob } from 'blob-util'
import styles from './css/visualise.css'

class Visualise extends React.Component{
    constructor(){
        super()
        this.state={
            dropdown_data:"users",
            img:"",
            isloading:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);

    }

    handleChange(event){
        this.setState({dropdown_data:event.target.value})
        console.log(this.state.dropdown_data)
    }

    handleClick(){
        this.setState({isloading:true})
        axios.get('/visualise',{params:{"key":this.state.dropdown_data}}).then((response)=>{
          const Blob = base64StringToBlob(response.data.imageString,'image/png')
          console.log(Blob)
          return Blob
        }).then((Blob)=>{
          const reader = new FileReader()
          reader.readAsDataURL(Blob)
          reader.onloadend=()=>{
            this.setState({img:URL.createObjectURL(Blob),isloading:false})
        }
    });
    }


    render(){
        return(
            <div className="Visualise_page">
                <form>
                    <select id="future select" name="future select" onChange={this.handleChange}>
                        <option value="users">users</option>
                        <option value="new users">new users</option>
                        <option value="sessions">sessions</option>
                        <option value="searchpattern">Search Pattern</option>
                    </select>
                </form>
                <button onClick={this.handleClick}>View</button>
                {this.state.isloading?<p>Loading....</p>:<img src={this.state.img}/>}
                
            </div>
        )
    }
}

export default Visualise;