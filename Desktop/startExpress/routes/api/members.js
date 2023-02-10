const express = require('express')
const router = express.Router();
const members = require("../../Members");

// gets all members  
router.get("/", (req, res) => res.json(members));

// get a single member
router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
    
});

// Create a Member
router.post('/', (req, res) =>{
    res.send(res.body);
});

module.exports = router; 