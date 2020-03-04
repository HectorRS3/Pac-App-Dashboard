import React, { useState } from 'react';

import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';

export default function RouterRoot(props) {
    const [state, setState] = useState({
        token: null,
        isLogged: false
    });

    if (state.isLogged) {
        return (
            <AdminRouter setState={setState}/>
        );
    } else {
        return (
            <UserRouter setState={setState}/>
        );
    }
}