import mongoose from "mongoose"

export const connectDB=async(mongo_uri)=>{
    return mongoose.connect(mongo_uri)
            .then(()=>console.log("Connect to DB...."))
                .catch(error=>console.log(error))
}