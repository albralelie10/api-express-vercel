import Book from "../model/books.js"

export const getAllData=async(req,res)=>{
    try{
        const books=await Book.find()
        return res.status(200).json({data:books})
    }catch(error){
        res.status(500).json({msg:"Server Error"})
    }
}

export const removeBook=async(req,res)=>{
    try{    
        const {id}=req.params
        const book=await Book.findByIdAndDelete({_id:id})
        if(!book)return res.status(404)
        return res.status(200).send("Remove book success")
    }catch(error){
        return res.status(500).json({msg:"Server Error"})
    }
}

