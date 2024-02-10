import express from "express";

const app = express()
const PORT = process.env.PORT ?? 4321

app.use("/", express.static('src/dist', {redirect:false}))
app.get("/pruebaTres", (req,res)=>{
    return res.status(200).json({
        status: "Bien",
        message: "Deploy"
    })
})
app.get("*", (req,res,next)=>{
    res.sendFile(process.cwd() + 'src/dist/index.html')
})



app.listen(PORT, ()=>{
    console.log("Todo OK");
})