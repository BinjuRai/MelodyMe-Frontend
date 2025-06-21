import {
    getAllCourseApi, createOneCourseApi, getOneCourseApi, updateOneCourseApi,
    deleteOneCourseApi
} from "../../api/admin/courseApi";

export const getAllCourseService = async () => {
    try {
        const response = await getAllCourseApi()
        return response.data
    } catch (err) {
        throw err.response?.data || { "message": "Failed to fetch" }
    }
}
export const createOneCourseService = async (data) => {
    try {
        const response = await createOneCourseApi(data)
        return response.data
    } catch (err) {
        throw err.response?.data || { "message": "Failed to create" }
    }
}
export const getOneCourseService = async (id) => {
    try{
        const response = await getOneCourseApi(id)
        return response.data
    }catch(err){
        throw err.response?.data || { "message" : "Get failed"}
    }
}
export const updateOneCourseService = async (id, data)=>{
    try{
        const response = await updateOneCourseApi(id, data)
        return response.data
    }catch(err){
        throw err.response?.data || { "message" : "Update failed"}
    }
}
export const deleteOneCourseService = async (id) => {
    try{
        const response = await deleteOneCourseApi(id)
        return response.data
    }catch(err){
        console.log(err)
        throw err.response?.data || { "message": "Delete failed" }
    }
}