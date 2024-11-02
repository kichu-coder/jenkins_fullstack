import express from "express";
import cors from "cors"; 

const app = express();
app.use(cors());

app.get("/" , (req, res) => {
    res.json({
        message : "app is running in the backend"
    })
})

app.listen(5000 , () => {
    console.log("server is listening to port 5000")
})