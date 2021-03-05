const mongoose = require('mongoose');
//for creating schema for toystore customer data
const toystore = new mongoose.Schema({
   
      page_label: {
          type:String,
        },
    fields: {
                type:Object,
                
            },
            
        
    

        
})

const elec =mongoose.model("Toystore",toystore)

module.exports =elec