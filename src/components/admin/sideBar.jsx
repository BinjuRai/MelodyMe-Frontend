// import { Link, useLocation } from 'react-router-dom';

// const navItems = [
//   { name: 'Dashboard', path: '/', icon: '📊' },
//   { name: 'Users', path: '/users', icon: '👤' },
//   { name: 'Courses', path: '/courses', icon: '📚' },
//   { name: 'Content', path: '/content', icon: '🎵' },
//   { name: 'Analytics', path: '/analytics', icon: '📈' },
//   { name: 'Settings', path: '/settings', icon: '⚙️' },
// ];

// export default function Sidebar() {
//   const location = useLocation();

//   return (
//     <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
//       <h1 className="text-xl font-bold mb-8">MelodyMe Admin</h1>
//       <nav>
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 ${
//               location.pathname === item.path ? 'bg-blue-600' : ''
//             }`}
//           >
//             <span>{item.icon}</span>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }
