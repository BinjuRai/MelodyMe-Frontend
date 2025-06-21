export default function LessonItem({ title, course, duration }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg mb-2 hover:shadow">
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{course}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">{duration} min</span>
        <button className="text-gray-500 hover:text-black">
          ✏️
        </button>
      </div>
    </div>
  );
}
