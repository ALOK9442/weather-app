import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function UserTable() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      status: 'active',
      addedDate: '2021-01-01'
    },
    {
      id: 2,
      name: 'Mitchell Stark',
      status: 'active',
      addedDate: '2021-05-05'
    },
    {
      id: 3,
      name: 'Virat Kohli',
      status: 'active',
      addedDate: '2022-01-01'
    },
    {
      id: 4,
      name: 'Rohit Sharma',
      status: 'active',
      addedDate: '2022-12-11'
    },
    {
      id: 5,
      name: 'Nick Jonas',
      status: 'active',
      addedDate: '2024-01-02'
    }
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, status: user.status === 'active' ? 'inactive' : 'active' };
      }
      return user;
    }));
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h1 className='font-mono text-4xl p-4 items-center justify-center w-fit rounded-md m-4'>Active Users</h1>
      <table className='table-auto border-2'>
        <thead>
          <tr>
            <th className='border-2'>UserName</th>
            <th className='border-2'>Added Date</th>
            <th className='border-2'>Status</th>
            <th className='border-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className='border-2'>{user.name}</td>
              <td className='border-2'>{user.addedDate}</td>
              <td className='border-2 '>
                <span className={user.status === 'active' ? 'text-green-500 flex items-center justify-center' : 'text-red-500 flex items-center justify-center'}>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </td>
              <td className='border-2'>
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
