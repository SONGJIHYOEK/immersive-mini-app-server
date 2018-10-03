models = require("../model/list")

module.exports = {
 list : (req, res)=>{
   console.log("hello")
  models.list((result)=>{
    res.status(200);
    res.header({'Access-Control-Allow-Origin' :'*'});
    res.send(result);
  })  
 }
 ,
 id : (req,res)=>{
  const id = req.params
  models.id(id ,(result)=>{
    res.status(200)
    res.header({'Access-Control-Allow-Origin': '*'});
    res.send(result) 
  })
 }
}