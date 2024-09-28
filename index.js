const express = require("express");
const port = 7000;
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")

app.use(cors({origin: "*"}))
app.use(cookieParser())


const connectDB = require("./db/connect");
const router = require("./routes/handler");
// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


  app.use("/",router)


    const start = async()=>{

        try {
            await connectDB("db connected")
            app.listen(port, ()=>{
              console.log(`Server started successfully on port ${port}`)
            })
           
        } catch (error) {
            console.log(error);
        }
    }

    start()