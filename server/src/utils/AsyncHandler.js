const asyncHandler = (requestHandler) => async(req,res,next) =>{
    try {
        await requestHandler(req,res);
    } catch (error) {
        next(error);
    }
}

export default asyncHandler ;