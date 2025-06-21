import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createOneCourseService, getAllCourseService,
    getOneCourseService, updateOneCourseService, deleteOneCourseService
} from "../../services/admin/courseServices";
import { toast } from "react-toastify";

export const useAdminCourse = () => {
    const query = useQuery(
        {
            queryKey: ["admin_course"],
            queryFn: () =>
                getAllCourseService()
        }
    )
    const courses = query.data?.data || []
    return {
        ...query, courses
    }
}
export const useCreateCourse = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createOneCourseService,
        onSuccess: () => {
            toast.success("Course created")
            queryClient
                .invalidateQueries(["admin_course"])
            // refetch with the key
        },
        onError: (err) => {
            toast.error(err.message || "Failed")
        }
    })
}

export const useGetOneCourse = (id) => {
    const query = useQuery(
        {
            queryKey: ["admin_course_detail"],
            queryFn: () => getOneCourseService(id),
            enabled: !!id,
            retry: false // default 3 retries
        }
    )
    const course = query.data?.data || {}
    return {
        ...query, course
    }
}
// id = "123" -> !!id true
// id = undefined, id = null -> !!id false
export const useUpdateOneCourse = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: ({ id, data }) =>
                updateOneCourseService(id, data),
            onSuccess: () => {
                toast.success("Course updated")
                queryClient.invalidateQueries(["admin_course"])
            },
            onError: (err) => {
                toast.error(err.message || "Failed to update")
            }
        }
    )
}
export const useDeleteOneCourse = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: deleteOneCourseService,
            mutationKey: ["admin_course_delete"],
            onSuccess: () => {
                toast.success("Course Deleted")
                queryClient.invalidateQueries(["admin_course"])
            },
            onError: (err) => {
                toast.error(err.message || "Delete failed")
            }
        }
    )
}