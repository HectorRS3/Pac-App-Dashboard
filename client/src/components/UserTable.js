import React, { useState, useEffect } from "react";
import * as ax from 'axios';
import Modal from "./Modal";

function UserTable(props) {
  const [state, setState] = useState({ users: [], isLoading: true, currentPassword: "", newPassword: "" })

  useEffect(() => {
    fetchUsers();

    return function cleanup() {
      setState({ isLoading: false })
    }
  }, [])

  function handlePasswords(evt) {
    const { name, value } = evt.target;
    setState(state => ({
      ...state, [name]: value
    })
    )
  }

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
      url: "http://localhost:8080/user/update/" + id,
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
    const response = await ax.delete("http://localhost:8080/user/delete/" + id, {
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

  async function changePassword(username) {
    const response = await ax({
      method: "PUT",
      url: "http://localhost:8080/user/change_password",
      headers: {
        token: props.token
      },
      data: {
        username: username,
        currentPassword: state.currentPassword,
        newPassword: state.newPassword
      }
    })

    alert(response.data.message)
  }

  if (!state.isLoading) {
    return (
      <div>
        <button className="btn btn=lg btn-success" onClick={() => { fetchUsers() }}>Refresh Users</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th>
                <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#createModal">Add User</button>
                <Modal title="Create User" modalID="createModal" submit={() => addUser()}>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" name="firstName" value={props.firstName} placeholder="First Name" onChange={props.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="lastName" value={props.lastName} placeholder="Last Name" onChange={props.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="username" value={props.username} placeholder="Username" onChange={props.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" name="password" value={props.password} placeholder="Password" onChange={props.handleChange} />
                    </div>
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
                    <td>
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-warning" data-toggle="modal" data-target="#changePasswordModal">Change Password</button>
                        <Modal title="Change Password" modalID="changePasswordModal" submit={() => { changePassword(user.username) }}>
                          <form>
                            <div className="form-group">
                              <input type="password" className="form-control" name="currentPassword" value={state.currentPassword} placeholder="Current Password" onChange={handlePasswords} />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control" name="newPassword" value={state.newPassword} placeholder="New Password" onChange={handlePasswords} />
                            </div>
                          </form>
                        </Modal>
                        <button type="button" className="btn btn-sm btn-info" data-toggle="modal" data-target="#editModal">Edit</button>
                        <Modal title="Edit User" modalID="editModal" submit={() => { editUser(user.id) }}>
                          <form>
                            <div className="form-group">
                              <input type="text" className="form-control" name="firstName" value={props.firstName} placeholder="First Name" onChange={props.handleChange} />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" name="lastName" value={props.lastName} placeholder="Last Name" onChange={props.handleChange} />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" name="username" value={props.username} placeholder="Username" onChange={props.handleChange} />
                            </div>
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