import express from "express"
const app=express()
const PORT=process.env.PORT||3000
import router from "./src/routes/router.js"
import { connectDB } from "./src/db/connection.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import path from "path"


app.use(cors({
    origin:"*",
    methods:["GET","DELETE","PUT","POST","OPTIONS"]
}))

app.use("/api",router)


app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


await connectDB(process.env.MONGO_URI)
app.listen(PORT,()=>console.log(`Server runnign in port ${PORT}`))


export default app