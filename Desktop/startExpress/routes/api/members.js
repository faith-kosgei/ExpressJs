const express = require('express')
const router = express.Router();
const members = require("../../Members");
// const fs = require('fs');

let newdata = [];

// gets all members  
router.get("/", (req, res) => res.json(members));

// get a single member
router.get("/members", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
    
});

// Create a Member
router.post('/new', (req, res) =>{
    //const email = req.body.name; 
  
  //fiiiirst save reqq data on an arrya data
    let data = req.body; 
    newdata.push(data);
    // console.log(data.email);
    if(!newdata){
        res.send({message: "try agaian"});
    }
    else{
        res.send({ message: 'Data added successfully' });
    }
   
});

module.exports = router; 
// done 