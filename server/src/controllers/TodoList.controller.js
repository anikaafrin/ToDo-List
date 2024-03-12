import User from "../models/User.js";
import { StatusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helpers.js";


export const GetTodos = async (req, es) => {
    try{
        const list = await User.findById(req.userId)
        .select("-password")
        .populate('todos')
        .exec();
        return res.json(jsonGenerate(StatusCode.SUCCESS, "All todo list", list));
    }catch(error){
        return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Error", error));
        

    }
  
};
