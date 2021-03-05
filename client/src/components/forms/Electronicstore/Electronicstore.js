import React from 'react';
import ReactDOM from "react-dom";
import './electronicstore.css';
import axios from 'axios';
import fetchData from "./getform";
import {useState, useEffect} from 'react';
import Element from './components/Element';
import Input from './components/input'
import Insertfield from './components/insertfield';
import Form from './form'



  
class Elec extends React.Component {
  constructor(props) {
    super(props);
    Elec.state = {
    };

    Elec.handleInputChange = Elec.handleInputChange.bind(Elec);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    Elec.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // const fn=this.state.fieldname;

  console.log(Elec.state.CustomerName)
    //  const ft=this.state.fieldtype

    axios.post("http://localhost:3001/elcdata",{fieldname:this.state.CustomerName});
     
     event.preventDefault();
    }
 

  render() {
    return (
<Form />
         );
  }
}



export default Elec