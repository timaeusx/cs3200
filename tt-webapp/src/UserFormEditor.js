import React from "react";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import UserService from "./UserService"

const {useState, useEffect} = React;

const UserFormEditor = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    if(id !== "new") {
      findUserById(id)
    }
  }, [id])
  const createUser = (user) => {
    UserService.createUser(user).then(() => navigate(-1))
  }
  const findUserById = (id) => {
    UserService.findUserById(id).then(user => setUser(user))
  }
  const deleteUser = (id) => {
    UserService.deleteUser(id).then(() => navigate(-1))
  }
  const updateUser = (id, newUser) => {
    UserService.updateUser(id, newUser).then(() => navigate(-1))
  }
  return (
      <div>
        <h2>User Editor</h2>
        <label>Id</label>
        <input value={user.id}/><br/>
        <label>First Name</label>
        <input onChange = {(e) => setUser(user => ({...user, firstname: e.target.value}))}
               value={user.firstname}/><br/>
        <label>Last Name</label>
        <input onChange = {(e) => setUser(user => ({...user, lastname: e.target.value}))}
               value={user.lastname}/><br/>
        <label>Username</label>
        <input onChange = {(e) => setUser(user => ({...user, username: e.target.value}))}
               value={user.username}/><br/>
        <label>Password</label>
        <input onChange = {(e) => setUser(user => ({...user, password: e.target.value}))}
               value={user.password}/><br/>
        <label>Email</label>
        <input onChange = {(e) => setUser(user => ({...user, email: e.target.value}))}
               value={user.email}/><br/>
        <label>Date of Birth</label>
        <input onChange = {(e) => setUser(user => ({...user, dob: e.target.value}))}
               value={user.dob}/><br/>
        <button className="btn btn-warning" onClick={() => {navigate(-1)}}>Cancel</button>
        <button className="btn btn-danger" onClick={() => {deleteUser(user.id)}}>Delete</button>
        <button className="btn btn-primary" onClick={() => {updateUser(user.id, user)}}>Save</button>
        <button className="btn btn-success" onClick={() => {createUser(user)}}>Create</button>
        <button className="btn btn-primary"
                onClick = {() => navigate(`/users/${user.id}/transitcards`,
                    {state : {id : user.id, fn : user.firstname}})}>
          View Cards
        </button>
      </div>
  )
}

export default UserFormEditor;