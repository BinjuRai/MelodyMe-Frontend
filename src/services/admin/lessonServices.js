import { getAllLessonApi } from "../../api/admin/lessonApi";

export const getAllLessonService = async (params) => {
    try{
        const response = await getAllLessonApi(params)
        return response.data
    }catch(err){
        throw err.response?.data || { message: 'Lesson fetch failed'}
    }
}
export const getOneLessonService = async (id) => {
    try{
        const response = await getOneLessonApi(id)
        return response.data
    }catch(err){
        throw err.response?.data || { "message" : "Get failed"}
    }
}