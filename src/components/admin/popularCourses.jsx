const courses = [
  { title: 'Vocal Classes for Beginners', students: 156, price: 4 },
  { title: 'Advanced Guitar Techniques', students: 89, price: 8 },
  { title: 'Piano Fundamentals', students: 234, price: 6 },
  { title: 'Music Theory Basics', students: 67, price: 5 },
];

export default function PopularCourses() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
      <ul className="space-y-3">
        {courses.map((course, index) => (
          <li key={index} className="flex justify-between">
            <div>
              <p className="font-medium">{course.title}</p>
              <p className="text-sm text-gray-500">{course.students} students</p>
            </div>
            <span className="bg-gray-200 px-3 py-1 rounded-lg text-sm font-semibold">${course.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
