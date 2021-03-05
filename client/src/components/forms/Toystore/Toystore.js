import React from 'react';
import ReactDOM from "react-dom";
import './toystore.css';
import Axios from 'axios';
import fetchData from "./getform";
import {useState, useEffect} from 'react';
import Element from './components/Element';
import Input from './components/input'
import Insertfield from './components/insertfield';



export default function App() {




    //for reading formfield data
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData().then(res => {
        setData(res.data);
      });
    }, []);
   const eform =JSON.parse(JSON.stringify(data));
   console.log(eform);

  
    //for adding formfield data
   
   return (

<div className="container">
  <form>
  {eform ? eform.map((field, i) => <div key={i}><Input field={field} /><p></p></div>) : null}
     
    
        
          <button type="submit" className="btn btn-primary">Enter Customer data</button>
          </form>
          <Insertfield/>

          </div>
   )
  
   }