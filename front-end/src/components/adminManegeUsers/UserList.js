import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_HOST = 'http://localhost:3001';
const INVENTORY_API_URL = `${API_HOST}/admin/manage`;

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchInventory = () => {
    fetch(`${INVENTORY_API_URL}`)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };

  useEffect(() => {
    fetchInventory();
  }, [users]);

  async function handleDelete(id) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const options = { headers: { Authorization: token } };

    const response = await axios.delete(`http://localhost:3001/admin/manage/${id}`, options);
    fetchInventory();
    return response;
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th data-testid="">Item</th>
            <th data-testid="">Nome</th>
            <th data-testid="">Email</th>
            <th data-testid="">Tipo</th>
            <th data-testid="">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={ index + 1 }>
                <td data-testid="admin_manage__element-user-table-item-number-">
                  { index + 1 }
                </td>
                <td data-testid="admin_manage__element-user-table-name-">
                  { user.name }
                </td>
                <td data-testid="admin_manage__element-user-table-email-">
                  { user.email }
                </td>
                <td data-testid="admin_manage__element-user-table-role-">
                  { user.role }
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }
                    type="button"
                    onClick={ () => handleDelete(user.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
