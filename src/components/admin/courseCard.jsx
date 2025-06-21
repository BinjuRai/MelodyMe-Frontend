export default function CourseCard({ course }) {
  const statusStyle =
    course.status === 'Active'
      ? 'bg-black text-white'
      : 'bg-gray-200 text-gray-700';

  return (
    <div className="bg-white p-5 rounded-lg shadow border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${statusStyle}`}>
          {course.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-1">by {course.instructor}</p>
      <div className="text-sm text-gray-700 mb-4">
        <p>Students: <span className="font-medium">{course.students}</span></p>
        <p>Price: <span className="font-medium">${course.price}</span></p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-1 text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          ✏️ Edit
        </button>
        <button className="flex items-center gap-1 text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          👁️ View
        </button>
      </div>
    </div>
  );
}
