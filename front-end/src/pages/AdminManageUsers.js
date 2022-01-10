import React, { useEffect, useState } from 'react';
import RegisterNewUsers from '../components/adminManegeUsers/RegisterNewUsers';
import UserList from '../components/adminManegeUsers/UserList';

const API_HOST = 'http://localhost:3001';
const INVENTORY_API_URL = `${API_HOST}/admin/manage`;

function AdminManageUsers() {
  const [users, setUsers] = useState([]);

  const fetchInventory = () => {
    fetch(`${INVENTORY_API_URL}`)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };

  useEffect(() => {
    fetchInventory();
  }, []);
  return (
    <div>
      <RegisterNewUsers />
      <UserList users={ users } />
    </div>
  );
}
export default AdminManageUsers;
