import CourseCard from '../../components/admin/courseCard';

const courses = [
  {
    title: 'Vocal Classes for Beginners',
    instructor: 'Sarah Miller',
    students: 156,
    price: 4,
    status: 'Active',
  },
  {
    title: 'Advanced Guitar Techniques',
    instructor: 'Mike Johnson',
    students: 89,
    price: 8,
    status: 'Active',
  },
  {
    title: 'Piano Fundamentals',
    instructor: 'Emma Davis',
    students: 234,
    price: 6,
    status: 'Active',
  },
  {
    title: 'Music Theory Basics',
    instructor: 'John Smith',
    students: 67,
    price: 5,
    status: 'Draft',
  },
];

export default function Courses() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p className="text-sm text-gray-500">Manage your course catalog</p>
        </div>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
          + Create Course
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
