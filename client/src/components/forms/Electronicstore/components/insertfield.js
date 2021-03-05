import React from 'react'
import {useState, useEffect} from 'react';
import { render } from 'react-dom';
import axios from "axios";

class Insertfield extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            
        };
   
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event)
    {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    }
    handleSubmit(event) {
      // const fn=this.state.fieldname;

    console.log(this.state.ft)
      //  const ft=this.state.fieldtype

        axios.post("http://localhost:3001/insertform",{fieldname:this.state.fn,fieldtype:this.state.ft});
       
       
       event.preventDefault();
      }
    
  render(){
    return (
    
    <form onSubmit={this.handleSubmit} >

      <div className="form-group">
      <label htmlFor="exampleInputEmail1">Add Custom Field Name</label>
      <input name="fn"type="text" onChange={this.handleInputChange} value={this.state.fn} className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name of the Field " />
      </div>

      <div className="”form-group”">
        <label htmlFor=" exampleinputpassword1"> Select type of Custom Field</label>
        <select name="ft" value={this.state.ft} onChange={this.handleInputChange} className="form-control">
        
          <option value="text">String</option>
          <option value="email">Email</option>
          <option value="number">phone</option>
          <option value="date">date</option>
          </select>
      </div>
      <button type="submit"  className="btn btn-primary">Add  Custom Field in the Form</button>
          </form >

        );
    }
}

export default  Insertfield