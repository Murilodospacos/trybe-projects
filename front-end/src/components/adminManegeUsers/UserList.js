import React from 'react';
import PropTypes from 'prop-types';

function UserList({ users }) {
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
                  { user.name}
                </td>
                <td data-testid="admin_manage__element-user-table-email-">
                  { user.email}
                </td>
                <td data-testid="admin_manage__element-user-table-role-">
                  { user.role }
                </td>
                <td data-testid="admin_manage__element-user-table-remove-">
                  Excluir
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.name).isRequired,
};

export default UserList;
