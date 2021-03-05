import React from 'react'

import Input from './input';
const Element = ({field:{field_type}}) => {
    switch (field_type) 
    {
        case "text":
            return (<Input/>);
        
        default:
                return null;}
    
        
    }
export default Element