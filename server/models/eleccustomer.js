const mongoose = require('mongoose');
//for creating schema for electronic customer data
const electornicstore = new mongoose.Schema({
   
      page_label: {
          type:String,
        },
    fields: {
                type:Object,
                
            },
            
        
    

        
})

const elec =mongoose.model("Electronicstore",electornicstore)

module.exports =elec