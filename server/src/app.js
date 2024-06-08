//imports
import express from "express" ;
import cors from "cors" ;
import dotenv from "dotenv"

// .env file configuration
dotenv.config();

// creating server using express
const app = express();

//middle wares configuration
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true 
}))
app.use(express.json({limit:"16kb"}))

export default app ;    