var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo"
  });
  con.connect(function(err) {
    if (err) throw err;
});
  module.exports.getOfdb=(sql,data=[],callback)=>{
    con.query(sql,data,  (err, result, fields) =>{
        if (err) {
            callback({code:true,message:err.message});
        }else{
            callback({code:false,data:result});
        }
    });
  }
  module.exports.execute=(sql,data=[],callback)=>{
   
    con.query(sql,data,  (err, result) =>{
        if (err) {
            callback({code:true,message:err.message});
        }else{
            callback({code:false,data:result});
        }
       
      });
  }