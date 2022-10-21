import React from 'react';
import classes from './UsersList.module.css';

function UsersList(props) {
return (
  <ul>
    <li>
      {props.users}
    </li>
  </ul>
)
}

export default UsersList;
