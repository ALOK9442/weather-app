import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function UserTable() {
  const [users, setUsers] = useState([]);

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const data = useSelector(state => state.auth.users);

  useEffect(() => {
    setUsers([...data]);
  }, [data]);

  const toggleStatus = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, status: user.status === 'active' ? 'inactive' : 'active' };
      }
      return user;
    }));
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortByNameFirstLetter = () => {
    const sortedArray = [...users].sort((a, b) => {
      const nameA = a.name.charAt(0).toLowerCase();
      const nameB = b.name.charAt(0).toLowerCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setUsers(sortedArray);
  };


  const sortedUsers = users.sort((a, b) => {
    if (sortBy === 'addedDate') {
      const comparison = a[sortBy].localeCompare(b[sortBy]);
      return sortOrder === 'asc' ? comparison : -comparison;
    } else if (sortBy === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(user =>
    user.name && user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h1 className='font-mono text-4xl p-4 items-center justify-center w-fit rounded-md m-4'>Active Users</h1>
      <div className="flex items-center justify-center w-full mb-4">
        <button onClick={sortByNameFirstLetter} className="bg-blue-500 hover:bg-blue-700 text-white font-mono p-2 rounded-md ml-auto mr-2">Sort by Name</button>
      </div>
      <table className='table-auto border-2 w-full'>
        <thead>
          <tr>
            <th className='border-2 cursor-pointer' onClick={() => handleSort('name')}>UserName</th>
            <th className='border-2 cursor-pointer' onClick={() => handleSort('addedDate')}>Added Date</th>
            <th className='border-2'>Status</th>
            <th className='border-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className='border-2'>{user.name}</td>
              <td className='border-2'>{user.addedDate}</td>
              <td className='border-2 '>
                <span className={user.status === 'active' ? 'text-green-500 flex items-center justify-center' : 'text-red-500 flex items-center justify-center'}>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </td>
              <td className='border-2 flex items-center justify-center'>
                <button onClick={() => deleteUser(user.id)} className='bg-red-500 hover:bg-red-700 text-white font-mono py-2 px-4 rounded mr-2'>
                  Delete
                </button>
                <button onClick={() => toggleStatus(user.id)} className='bg-blue-500 hover:bg-blue-700 text-white font-mono py-2 px-4 rounded'>
                  {user.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
