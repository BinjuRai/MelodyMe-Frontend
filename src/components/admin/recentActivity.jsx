const activities = [
  { text: 'New user registered', user: 'Alice Johnson', time: '2 hours ago' },
  { text: 'Course completed', user: 'Bob Smith', time: '4 hours ago' },
  { text: 'Payment received', user: 'Carol Davis', time: '6 hours ago' },
  { text: 'New course created', user: 'Admin', time: '1 day ago' },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <ul className="space-y-2">
        {activities.map((act, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">{act.text}</p>
              <p className="text-xs text-gray-500">{act.user} • {act.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
