import LessonItem from '../../components/admin/lessonItem';

const lessons = [
  {
    title: 'Introduction to Vocal Warm-ups',
    course: 'Vocal Classes for Beginners',
    duration: 15,
  },
  {
    title: 'Breathing Techniques',
    course: 'Vocal Classes for Beginners',
    duration: 20,
  },
  {
    title: 'Basic Chord Progressions',
    course: 'Advanced Guitar Techniques',
    duration: 25,
  },
];

export default function LessonContent() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-sm text-gray-500">Manage lessons, videos, and resources</p>
        </div>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
          + Add Content
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-1 rounded bg-black text-white text-sm">Lessons</button>
        <button className="px-4 py-1 rounded bg-gray-100 text-sm text-gray-700">Videos</button>
        <button className="px-4 py-1 rounded bg-gray-100 text-sm text-gray-700">Resources</button>
      </div>

      {/* Recent Lessons */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold mb-3">Recent Lessons</h2>
        {lessons.map((lesson, index) => (
          <LessonItem
            key={index}
            title={lesson.title}
            course={lesson.course}
            duration={lesson.duration}
          />
        ))}
      </div>
    </div>
  );
}
