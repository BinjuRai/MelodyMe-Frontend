import axios from "../api"

export const getAllCourseApi = () => axios.get("/admin/courses")

export const createOneCourseApi = (data) =>
    axios.post("/admin/courses", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
) // request using multer/file upload
export const getOneCourseApi = (id) => 
    axios.get("/admin/courses/" + id)

export const updateOneCourseApi = (id, data) =>
    axios.put("/admin/courses/" + id, data, {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    }
)
// export const deleteOneCourseApi = (id) =>
//     axios.delete("/admin/course/" + id)

export const deleteOneCourseApi = (id) => {
    return axios.delete(`/admin/courses/${id}`); 
};