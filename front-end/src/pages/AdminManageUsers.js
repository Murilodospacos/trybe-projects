import React from 'react';
import RegisterNewUsers from '../components/adminManegeUsers/RegisterNewUsers';
import UserList from '../components/adminManegeUsers/UserList';

function AdminManageUsers() {
  return (
    <div>
      <RegisterNewUsers />
      <UserList />
    </div>
  );
}
export default AdminManageUsers;
