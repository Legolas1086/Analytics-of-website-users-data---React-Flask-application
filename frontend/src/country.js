import React from 'react'
import axios from 'axios'
import styles from './css/country.css'


class Country extends React.Component{
    constructor(){
        super()
        this.state={
            dropdown_data:"Users",
            data:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
     content = []

    handleChange(event){
        this.setState({dropdown_data:event.target.value})
    }
    
   

    handleClick(){
        console.log(this.state.dropdown_data)
        axios.get('/country',{params:{'key':this.state.dropdown_data}}).then(
            (response)=>{this.setState({data:response.data})}

        )
    }
        
    
    
    

    

    render(){

        return(
            <div className="Country_page">
                <form>
                    <select id="future select" name="future select" onChange={this.handleChange}>
                        <option value="Users">users</option>
                        <option value="New users">New users</option>
                        <option value="Total revenue">Revenue</option>
                    </select>
                </form>
                <button onClick={this.handleClick}>View</button>
                <ul className="Outer_list">
                    {
                        this.state.data.map((data)=>
                        <div>
                            <h1>{data.name}</h1>
                            {data.details.map((details)=>
                                <ul>
                                   <li>{details.country}</li>
                                   <li>{details.parameter}</li>
                                </ul>)}
                                
                            
                        </div>
                        )
   
                    }
                   
                </ul>
            </div>
        )
    }
}

export default Country;