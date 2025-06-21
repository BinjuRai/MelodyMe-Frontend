const stats = [
  { label: 'Total Users', value: '2,847', change: '+12%', color: 'text-green-500' },
  { label: 'Active Courses', value: '24', change: '+3', color: 'text-green-500' },
  { label: 'Revenue', value: '$12,847', change: '+8%', color: 'text-green-500' },
  { label: 'Completion Rate', value: '87%', change: '+5%', color: 'text-green-500' },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-600">{stat.label}</p>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
          <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
        </div>
      ))}
    </div>
  );
}
