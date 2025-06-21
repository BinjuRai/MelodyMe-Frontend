
import axios from "../api"

export const getAllLessonApi = (params) => axios.get("/admin/lesson", {params})
export const getOneLessonApi = (id) => 
    axios.get("/admin/lesson/" + id)
