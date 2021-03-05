const express = require('express');
const mongoose = require('mongoose');

const electronicmodel= require("./models/electronicsschema");
const toymodel = require("./models/toystore");
const eleccustomermodel=require("./models/eleccustomer");
const toydata = require("./models/toystoredatainsert");
const cors =require("cors");
const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect('mongodb+srv://root:root@cluster0.qwqqa.mongodb.net/store?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});


//reading form field for electronic store
app.get('/electronicformread',async (req,res)=>{

    electronicmodel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
       res.send(result);
       console.log(result);
    });
    
    
    });
    
    //readin form field from toystore form
    app.get('/toyformread',async (req,res)=>{

        toymodel.find({},(err,result)=>{
            if(err){
                res.send(err);
            }
           res.send(result);
           console.log(result);
        });
        
        
        });

  //adding form field to toystore form

        app.post("/insertform1",async (req,res)=>{
    
            const fieldid = req.body.fieldname;
        console.log(fieldid);
            
            const fieldtype= req.body.fieldtype;
        
            
            const toy = new toymodel({page_label: "Electronicform",fields: { field_id:fieldid,field_type:fieldtype}});
                try {
                    await toy.save();
                    console.log("data inserted...")
                } catch (error) {
                    console.log(error);
                }
            
           
        });



//adding form field for electronic store form
app.post("/insertform",async (req,res)=>{
    
    const fieldid = req.body.fieldname;
console.log(fieldid);
    
    const fieldtype= req.body.fieldtype;

    
    const elec = new electronicmodel({page_label: "Electronicform",fields: { field_id:fieldid,field_type:fieldtype}});
        try {
            await elec.save();
            console.log("data inserted...")
        } catch (error) {
            console.log(error);
        }
    
   
});


//for adding sending elctronic customer data to database
app.post("/elcdata",async (req,res)=>{
    
    
    const obj=req.body
   
    const e = new eleccustomermodel({page_label: "Electronicform",fields:{obj}});
        try {
            await e.save();
            console.log("data inserted...")
        } catch (error) {
            console.log(error);
        }
    
   
});



//for reading electronic customer data to database
app.get("/elcread",async (req,res)=>{
    
    
    eleccustomermodel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
       res.send(result);
       console.log(result);
    });
    
   
});


//for adding sending toystore customer data to database
app.post("/toyinsert",async (req,res)=>{
    
    
    const obj=req.body
   
    const e = new toydata({page_label: "Electronicform",fields:{obj}});
        try {
            await e.save();
            console.log("data inserted...")
        } catch (error) {
            console.log(error);
        }
    
   
});



//for reading toystore customer data to database
app.get("/toyread",async (req,res)=>{
    
    
    eleccustomermodel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
       res.send(result);
       console.log(result);
    });
    
   
});







app.listen(3001, ()=>{

    console.log("Server running on port 3001...");
})
