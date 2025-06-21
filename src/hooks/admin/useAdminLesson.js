import { useQuery } from "@tanstack/react-query";
import { getAllLessonService } from "../../services/admin/lessonServices";
import { useState } from "react";


export const useAdminLesson = () => {
    const [ pageNumber, setPageNumber ] = useState(1)
    const [ pageSize, setPageSize ] = useState(10)
    const [ search, setSearch ] = useState("")

    const query = useQuery(
        {
            queryKey: ["admin_lesson", pageNumber, pageSize, search], 
            queryFn: () => {
                return getAllLessonService(
                    {
                        page: pageNumber,
                        limit: pageSize,
                        search: search
                    } 
                )
            },
            keepPreviousData: true 
        }
    )
    const lessons = query.data?.data || []
    const pagination = query.data?.pagination || {
        page: 1,
        totalPages:1,
        limit: 10
    }
    const canPreviousPage = pagination.page > 1 
    const canNextPage = pagination.page < pagination.totalPages

    return {
        ...query,
        lessons,
        pageNumber,
        setPageNumber,
        pagination,
        canPreviousPage,
        canNextPage,
        pageSize,
        setPageSize,
        search,
        setSearch
    }
}