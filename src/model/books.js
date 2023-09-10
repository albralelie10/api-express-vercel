import mongoose from "mongoose"


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    author:{
        type:String,
        trim:true,
        required:true
    }
})

export default mongoose.model("books",bookSchema)
