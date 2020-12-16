const connection = require ("../config/connection"); 

const orm = {
    selectAll: function (table, cb){
        connection.query("SELECT * FROM ??", [table], function (err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    updateOne: function(table, fieldColmn, fieldValue, condition, conditionValue, cb){  
        connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [table, fieldColmn, fieldValue, condition, conditionValue], function(err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    insertOne: function(table, columnName, columnValue, cb){
        const queryString = `INSERT INTO ${table} (${columnName}) VALUES ('${columnValue}')`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    deleteOne: function (table, condition, conditionValue, cb){
        const queryString = `DELETE FROM ${table} WHERE ${condition} = ${conditionValue}`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err)
            cb(results); 
        })
}
}

module.exports = orm; 
    