//imports
import dotenv from "dotenv" ;
import dbconfig from "./db/dbconfig.js";
import app from "./app.js";

// .env file configuration
dotenv.config();

//test end point
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to chit chat server</h1>")
})


// connecting to db and if connected then start listening the server otherwise exist process
dbconfig()
.then(()=>{
    app.listen(process.env.PORT || 2000 , ()=>{
        console.log(`Server is listening on port : ${process.env.PORT || 2000}`)
    })
})
.catch(err=>{
    console.log("Something went wrong while connecting to database!! " , err);
    process.exit(1);
})


// routes configuration
import userRoute from "./route/user.route.js"
app.use("/api",userRoute)