var express = require('express');
var router = express.Router();
var mysqlcon=require('./connection.js');
const config=require('./config.json');
var jwt=require('jsonwebtoken');
const formidable = require('formidable')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/me',(req,res)=>{
  res.send({code:true,message:"error",data:[{name:"me"}]});
})
router.post('/register',(req,res)=>{
  
  var {username,first_name,last_name,date_of_birth,address,tel,password,file_name}=req.body;
  mysqlcon.getOfdb("select * from admin where username=?",[username],(data)=>{
    if(!data.code){
      if(data.data.length==0){
        mysqlcon.getOfdb("select * from user where username=?",[username],(data)=>{
          if(!data.code){
            if(data.data.length==0){
              console.log(file_name)
              mysqlcon.execute(`insert into user values (?,?,?,?,?,?,SHA1(?),?,Now(),Now(),1)`,[username,first_name,last_name,date_of_birth,address,tel,password,file_name],data=>{
                res.send(data);
              },err=>{

              })
            }else{
              res.send({code:true,message:"user already exist"})
            }
          }else{
            res.send(data);
          }
        })
      }else{
        res.send({code:true,message:"user already exist"})
      }
    }else{
      res.send(data);
    }
  })
  
})
router.post("/login",(req,res)=>{
  var {username,password}=req.body;
  mysqlcon.getOfdb(`select * from admin where username=? and password=SHA1(?)`,[username,password],data=>{
    if(!data.code){
      if(data.data.length==0){
        mysqlcon.getOfdb(`select * from user where username=? and password=SHA1(?) and not flag=0`,[username,password],data=>{
          if(!data.code){
            if(data.data.length==0){
              res.send({code:false,data:{auth:false,token:""}});
            }else if(data.data[0].flag==1){
              res.send({code:true,message:"please wait for approving"})
            }else{
              var temp=data.data[0];
              var user={username:temp.username,name_show:temp.first_name+" "+temp.last_name,role:"user"}
              var token=jwt.sign({user},config.secret,{expiresIn:24*3600});
         
              res.send({code:false,data:{auth:true,token:token}});
            }
          }else{
            res.send(data);
          }
        })
      }else{
        var temp=data.data[0];
        var user={username:temp.username,name_show:temp.username,role:'admin'}
        var token=jwt.sign({user},config.secret,{expiresIn:24*3600});
   
        res.send({code:false,data:{auth:true,token:token}});
      }
    }else{
      res.send(data);
    }
  })
 
 
})
router.get('/get_user',(req,res)=>{
  mysqlcon.getOfdb('select * from user u inner join flag f on u.flag=f.flag_id where u.flag!=0',[],data=>{
    res.send(data);
  })
})
router.post("/approve",(req,res)=>{
  var {username}=req.body;
  mysqlcon.execute(`update user set flag=2 where username=?`,[username],data=>{
    res.send(data);
  })
})
router.post("/delete_user",(req,res)=>{
  var {username}=req.body;
  mysqlcon.execute(`update user set flag=0 where username=?`,[username],data=>{
    res.send(data);
  })
})
router.post("/edit_user",(req,res)=>{
 var {username,first_name,last_name,date_of_birth,address,tel,password,flag}=req.body;
  mysqlcon.execute(`update user set first_name=?,last_name=?,date_of_birth=?,address=?,tel=?,password=SHA1(?),flag=? where username=?`,[first_name,last_name,date_of_birth,address,tel,password,flag,username],data=>{
    res.send(data);
  })
})
router.get('/get_status',(req,res)=>{
  mysqlcon.getOfdb('select * from flag',[],data=>{
    res.send(data);
  })
})
router.post("/get_file",(req,res)=>{
  var {username}=req.body;
  mysqlcon.getOfdb('select * from file where username=?',[username],data=>{
    res.send(data);
  })
})
router.post("/upload_file",(req,res)=>{
  // var username=req.query.username;
  var a=new Date().getTime();
  // var id=data.data[0].id;
  var file_name="";
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
        var x=file.name.split(".");

        file_name = x[0]+"_"+a+'.'+x[x.length-1];
        file.path= __dirname + '/../public/files/' +file_name;
       
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', file.name);
      res.send({code:false,data:{file_name}})
    })
    
    
})
router.get("/get_usernotapprove",(req,res)=>{
  mysqlcon.getOfdb('select * from user u inner join flag f on u.flag=f.flag_id where u.flag=1',[],data=>{
    res.send(data);
  })
})
router.post("/delete_file",(req,res)=>{
  mysqlcon.execute('delete from file where file_id=?',[req.body.file_id],data=>{
    res.send(data);
  })
})

module.exports = router;
