import mongoose from "mongoose"

// function for connecting db
const dbconfig = async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.DB_URI);
        console.log("DB connected successfully!! Host Name :" , connectionInstance.connection.host);
    } catch (error) {
        console.log("Error while connect to db from db config !! Error message :",error);
        process.exit(1);
    }
}

export default dbconfig ;