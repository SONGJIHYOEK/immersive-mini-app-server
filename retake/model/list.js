let model = require ('../database/database')

module.exports= {
 list : (callback)=>{
  model.find({})
    .then((list)=>{
      callback(list)
    })
    .catch((err)=>{
      callback(err)
    })
  } 
 ,
 id : (id, callback)=>{
  model.findById(id)
    .then((list)=>{
      callback(list)
    })
    .catch((err)=>{
      callback(err)
    })
 }
}