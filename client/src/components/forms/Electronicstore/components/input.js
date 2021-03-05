import React from 'react'
import Elec from '../Electronicstore'
const Input = ({field:{fields:{field_type,field_id}}}) => 
{
    return (
    <div className="form-group ">
        <label htmlFor="exampleInputEmail1">{field_id}</label>
        <input onChange={Elec.handleInputChange} type={field_type} name={field_id} className="form-control" id={field_id} aria-describedby="emailHelp" placeholder={field_id} />
        </div>
        )}
        export default Input