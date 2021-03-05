const mongoose = require('mongoose');

const electornicstore = new mongoose.Schema({
   
      page_label: {
          type:String,
        },
    fields: {
                field_id: {
                    type:String
                },
                field_type: {type:String},
                
            },
            
        
    

        
})

const elec =mongoose.model("Electronicstoreform",electornicstore)

module.exports =elec