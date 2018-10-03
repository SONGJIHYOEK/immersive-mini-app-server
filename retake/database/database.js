
const mongoose = require('mongoose');

mongoose.connect('mongodb://student:JNytCZanZaDEcTxMZyM2wsaF@ds161312.mlab.com:61312/codesplash') 
.then(()=>{
    console.log("db connected")
  })
  .catch((err)=>{
    console.log(err)
  })

const ImageSchema= new mongoose.Schema({
  format: String,
  width: Number,
  height: Number,
  filename: String,
  id: Number,
  author: String,
  author_url: String,
  post_url: String
})

module.exports= mongoose.model('Image', ImageSchema)
