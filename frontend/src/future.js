import React from 'react'
import axios from 'axios';
import styles from './css/future.css'
import { base64StringToBlob } from 'blob-util';

class Future extends React.Component{
    constructor(){
        super()
        this.state={
            dropdown_data:"",
            img:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }


    handleChange(event){
        this.setState({dropdown_data:event.target.value})
        console.log(this.state.dropdown_data)
    }

    handleClick(){
        axios.get('/demo',{params:{"key":this.state.dropdown_data}}).then((response)=>{
          const Blob = base64StringToBlob(response.data.imageString,'image/png')
          console.log(Blob)
          return Blob
        }).then((Blob)=>{
          const reader = new FileReader()
          reader.readAsDataURL(Blob)
          reader.onloadend=()=>{
            this.setState({img:URL.createObjectURL(Blob)})
        }
    });
    }

    render(){
        return(
            <div className="Future_page">
                <form>
                    <select id="future select" name="future select" onChange={this.handleChange}>
                        <option value="simple">Simple</option>
                        <option value="change points">With Change points</option>
                        <option value="trend">Trend</option>
                    </select>
                </form>
                <button onClick={this.handleClick}>View</button>
                <img src={this.state.img}></img>

            </div>
        )
    }
}

export default Future;