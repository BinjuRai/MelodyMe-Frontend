import DashboardCards from '../components/DashboardCards';
import RecentActivity from '../components/RecentActivity';
import PopularCourses from '../components/PopularCourses';

export default function Dashboard() {
  return (
    <div>
      <DashboardCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <PopularCourses />
      </div>
    </div>
  );
}
