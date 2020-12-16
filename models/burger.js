// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js"); 

const burger = {

    selectAll: function(cb){
        orm.selectAll("burgers", cb); 
    },

    updateOne: function(devouredStatus, burgerId, cb){
        orm.updateOne("burgers", "devoured", devouredStatus, "id", burgerId, cb); 
    },

    insertOne: function(newBurger, cb){
        orm.insertOne("burgers", "burger_name", newBurger, cb); 
    },

    deleteOne: function(burgerId, cb){
        orm.deleteOne("burgers", "id", burgerId, cb); 
    }
}
// Export the database functions for the controller (catsController.js).
module.exports = burger; 