import{loginUserApi, registerUserApi} from "../api/authApi";
export const registerUserService = async(FormData) => {
    try{
        const register = await registerUserApi(FormData)
        return Response.data //response body

    }catch(err){
        console.log(err)
        throw err.response?.data || {message:"Registration Failed"}
    }
}
export const loginUserService = async (formData) => {
    try{
        const response = await loginUserApi(formData)
        return response.data
    }catch(err){
        throw err.response?.data || {message:"Login failed"}
    }
}