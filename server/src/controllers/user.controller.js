import asyncHandler from "../utils/AsyncHandler.js";

const setUserController = asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {userName, email , password , fullName} = req.body ;

    console.log(userName, email , password , fullName)
})

export {
    setUserController,
}