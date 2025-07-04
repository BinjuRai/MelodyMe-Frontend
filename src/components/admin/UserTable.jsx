import React, { useState } from 'react';
import { useAdminUser, useDeleteUser } from '../../hooks/admin/useAdminUser';
import { getBackendImageUrl } from '../../utils/backend-image';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal';
import { toast } from 'react-toastify';

export default function UserTable() {
  const { users, error, isPending } = useAdminUser();
  const deleteUser = useDeleteUser();
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = () => {
    if (!deleteId) return;

    deleteUser.mutate(deleteId, {
      onSuccess: () => {
        toast.success("User deleted successfully");
        setDeleteId(null);
      },
      onError: () => {
        toast.error("Failed to delete user");
        setDeleteId(null);
      }
    });
  };

  if (isPending) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (

<div className="p-4">
  <DeleteModal
    isOpen={!!deleteId}
    onClose={() => setDeleteId(null)}
    onConfirm={handleDelete}
    message="Are you sure you want to delete this user?"
  />

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-[#222740]">User Table</h2>
    <Link to="/admin/user/create">
      <button className="bg-[#222740] text-white px-4 py-2 rounded-lg hover:bg-[#1a1d33] transition-colors">
        + Create User
      </button>
    </Link>
  </div>


  <div className="overflow-x-auto rounded-xl shadow-md bg-white">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-[#F0C5CE] text-[#222740] uppercase text-xs font-semibold">
        <tr>
          <th className="px-4 py-3">Image</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="text-[#222740] divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user._id} className="hover:bg-[#f9f9f9] transition-colors">
           
            <td className="px-4 py-3">
              <img
                src={getBackendImageUrl(user.filepath)}
                alt={user.firstName || "User"}
                className="w-12 h-12 rounded-full object-cover border border-[#EFD365]"
              />
            </td>

           
            <td className="px-4 py-3 font-medium">
              {user.firstName} {user.lastName}
            </td>

         
            <td className="px-4 py-3 text-gray-600">{user.email}</td>

            
            <td className="px-4 py-3 text-center">
              <div className="flex justify-center gap-2">
                <Link to={`/admin/user/${user._id}`}>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs">
                    View
                  </button>
                </Link>
                <Link to={`/admin/user/${user._id}/edit`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => setDeleteId(user._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
