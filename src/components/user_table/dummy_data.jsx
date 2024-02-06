import React, { useEffect } from 'react';

function UserTable() {
    const users = [
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
    ];
    useEffect(() => {
        console.log(users);
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
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
                            <td className='border-2'>{user.status}</td>
                            <td className='border-2'> {/* Action buttons can go here */}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
