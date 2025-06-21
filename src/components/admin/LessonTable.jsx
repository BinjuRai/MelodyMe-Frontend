import React from 'react'
import { useAdminLesson} from '../../hooks/admin/useAdminLesson'

export default function LessonTable() {
    const { data, error, isPending, lessons, pageNumber, 
        setPageNumber, pagination, canNextPage, canPreviousPage,
        pageSize, setPageSize, search, setSearch } = useAdminLesson()

    if (error) return <>{error.message}</>
    // if (isPending) return <>Loading...</>

    const handlePrev = () => {
        if(canPreviousPage){
            setPageNumber((prev) => prev - 1)
        }
    }
    const handleNext = () => {
        if(canNextPage){
            setPageNumber((prev) => prev + 1)
        }
    }
    const handleSearch = (e) => {
        setPageNumber(1) // reset page number
        setSearch(e.target.value)
    }

    return (
        <div>
            
            <div>
                <label>Show</label>
                <select
                    value={pagination.limit}
                    onChange={
                        (e)=>{
                            setPageSize(Number(e.target.value))
                        }
                    }
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
                <label>Search:</label>
                <input
                    onChange={handleSearch}
                    value={search}
                ></input>
            </div>
            {/* <table className='min-w-full table-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lessons.map((row) => 
                            <tr key={row._id}>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                            </tr>
                        )
                    }
                        
                </tbody>
            </table> */}  
            <div className="p-4">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-700">Show</label>
      <select
        className="border border-gray-300 rounded px-2 py-1 text-sm"
        value={pagination.limit}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </div>
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-700">Search:</label>
      <input
        className="border border-gray-300 rounded px-2 py-1 text-sm"
        onChange={handleSearch}
        value={search}
        placeholder="Search lessons..."
      />
    </div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {lessons.map((lesson) => (
      <div
        key={lesson._id}
        className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
      >
        <h3 className="text-lg font-semibold text-[#222740] mb-2">{lesson.name}</h3>
        <p className="text-gray-600 text-sm mb-4">Price: ${lesson.price}</p>
        <button className="mt-auto bg-[#222740] text-white text-sm py-1 px-3 rounded hover:bg-[#EFD365] transition">
          View Details
        </button>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="mt-6 flex items-center justify-between">
    <button
      onClick={handlePrev}
      disabled={!canPreviousPage}
      className={`px-4 py-2 rounded text-white text-sm ${
        canPreviousPage ? "bg-[#222740] hover:bg-[#33408c]" : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      Back
    </button>
    <span className="text-[#222740] font-medium">
      Page {pagination.page} of {pagination.totalPages}
    </span>
    <button
      onClick={handleNext}
      disabled={!canNextPage}
      className={`px-4 py-2 rounded text-white text-sm ${
        canNextPage ? "bg-[#222740] hover:bg-[#33408c]" : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  </div>
</div>

        
        </div>
    )
}