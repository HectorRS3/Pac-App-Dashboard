import React, { useState, useEffect } from "react";
import * as ax from 'axios';
import Modal from "./Modal";

function UserTable(props) {
  const [state, setState] = useState({ users: [], isLoading: true })

  useEffect(() => {
    fetchUsers();

    return function cleanup() {
      setState({ isLoading: false })
    }
  }, [])

  const fetchUsers = async () => {
    const response = await ax({
      method: "GET",
      url: "http://localhost:8080/user/",
      headers: {
        token: props.token
      }
    })

    setState({ users: response.data });
  }

  async function editUser(id) {
    const response = await ax({
      method: "PUT",
      url: "http://localhost:8080/user/" + id,
      headers: {
        token: props.token
      },
      data: {
        firstName: props.firstName,
        lastName: props.lastName,
        username: props.username,
        password: props.password
      }
    })

    alert(response.data.message)
  }

  async function deleteUser(id) {
    const response = await ax.delete("http://localhost:8080/user/" + id, {
      headers: {
        token: props.token
      }
    })

    alert(response.data.message)
  }

  async function addUser() {
    const response = await ax.post("http://localhost:8080/user/create", {
      firstName: props.firstName,
      lastName: props.lastName,
      username: props.username,
      password: props.password
    })

    alert(response.data.message)
  }

  if (!state.isLoading) {
    return (
      <div>
        <button className="btn btn=lg btn-success" onClick={() => {fetchUsers()}}>Refresh Users</button>
        <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th>
            <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#createModal">Add User</button>
            <Modal title="Create User" modalID="createModal" submit={() => addUser()}>
              <form>
                <input type="text" className="form-control" name="firstName" value={props.firstName} placeholder="First Name" onChange={props.handleChange} />
                <input type="text" className="form-control" name="lastName" value={props.lastName} placeholder="Last Name" onChange={props.handleChange} />
                <input type="text" className="form-control" name="username" value={props.username} placeholder="Username" onChange={props.handleChange} />
                <input type="password" className="form-control" name="password" value={props.password} placeholder="Password" onChange={props.handleChange} />
              </form>
            </Modal>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          state.users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-info" data-toggle="modal" data-target="#editModal">Edit</button>
                    <Modal title="Edit User" modalID="editModal" submit={() => {editUser(user.id)}}>
                      <form>
                        <input type="text" className="form-control" name="firstName" value={props.firstName} placeholder="First Name" onChange={props.handleChange} />
                        <input type="text" className="form-control" name="lastName" value={props.lastName} placeholder="Last Name" onChange={props.handleChange} />
                        <input type="text" className="form-control" name="username" value={props.username} placeholder="Username" onChange={props.handleChange} />
                      </form>
                    </Modal>
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => { deleteUser(user.id) }}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
      </div>
    );
  } else {
    return <p>loading...</p>
  }
}

export default UserTable;