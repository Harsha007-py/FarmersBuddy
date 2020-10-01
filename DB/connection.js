const mongoose=require('mongoose');
const URI="mongodb://localhost:27017/Farmer";
const connectDB=async()=>{
    mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    }).catch(err => console.log(err.reason)); 
    console.log("DB connected");
}
module.exports=connectDB;