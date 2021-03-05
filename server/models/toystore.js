const mongoose = require('mongoose');

const toystore = new mongoose.Schema({
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

const toy =mongoose.model("toystoreform",toystore)

module.exports =toy