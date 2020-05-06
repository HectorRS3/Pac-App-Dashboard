import React from 'react';

import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';

export default function RouterRoot(props) {
  if (localStorage.getItem('token')) {
    return (
      <AdminRouter />
    );
  } else {
    return (
      <UserRouter />
    );
  }
}