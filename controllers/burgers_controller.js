const express = require("express"); 
const burger = require("../models/burger.js"); 

const router = express.Router();
 
// get route for getting all the posts
router.get("/", function(req, res){
    let cb = function (results) {res.render("index", {burgers: results})}; 
    burger.selectAll(cb);  
}); 

// put route for updating the entries
router.put("/api/burgers/:id", async function(req, res){
    const id= req.params.id; 
    const eatenStatus= req.body.devoured; 
    const cb = function (results){
        if (results.changedRows === 0){
            return res.status(404).end(); 
        } else {
            res.status(200).end(); 
        }
    }; 
    burger.updateOne(eatenStatus, id, cb); 
   
}); 
// post route for posting new entries
router.post("/api/burgers", async function(req, res){
    const newBurgerName= req.body.newBurger; 
    const cb = function (results){
        if (results.affectedRows !== 0){
            res.status(200).end(); 
        }
    }; 
    burger.insertOne(newBurgerName, cb); 
     
 }); 
// delete route for deleting entries
router.delete("/api/burgers/:id", async function(req, res){
    const burgerId= req.params.id;
    const cb = function(results) {
        if (results.affectedRows !== 0){
            res.status(200).end(); 
        } else {
            return res.status(404).end(); 
        }
    } ; 
    burger.deleteOne(burgerId, cb); 
   
}); 

module.exports = router; 