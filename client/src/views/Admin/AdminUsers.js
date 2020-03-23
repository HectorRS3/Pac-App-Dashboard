import React, {useState} from 'React'

import UserTable from '../Components/UserTable';

export default function AdminUsers(props) {
    return(
        <div className="adminUsers">
            <UserTable
                token={props.token}
            />
        </div>
    );
}