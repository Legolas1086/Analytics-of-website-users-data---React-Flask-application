import React from 'react'
import axios from 'axios';
import styles from './css/future.css'
import { base64StringToBlob } from 'blob-util';

class Future extends React.Component{
    constructor(){
        super()
        this.state={
            dropdown_data:"simple",
            img:"",
            isloading:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({isloading:true})
        axios.get('/future',{params:{"key":this.state.dropdown_data}}).then((response)=>{
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


    handleChange(event){
        this.setState({dropdown_data:event.target.value})
        console.log(this.state.dropdown_data)
    }

    handleClick(){
        this.setState({isloading:true})
        axios.get('/future',{params:{"key":this.state.dropdown_data}}).then((response)=>{
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
            <div className="Future_page">
                <form>
                    <select id="future select" name="future select" onChange={this.handleChange}>
                        <option value="simple">Simple</option>
                        <option value="change points">With Change points</option>
                        <option value="trend">Trend</option>
                    </select>
                </form>
                <button onClick={this.handleClick}>View</button>
                {this.state.isloading?<p>Please wait while the result is being computed...</p>:<img src={this.state.img}></img>}
                

            </div>
        )
    }
}

export default Future;