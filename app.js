const {mongoose} = require("mongoose")
const studentRoute = require("./routes/studentRoute")
const express = require("express")
const cors = require("cors")
require("dotenv/config")

const app = express()


// middleware
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/student",studentRoute)

//conntion

app.listen(process.env.PORT || 5000)

//connect with the mongodb
async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
    }
}

db()



