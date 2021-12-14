import React from "react";
import {useNavigate} from "react-router";
import UserService from "./UserService";
const {useEffect, useState} = React;

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const findAllUsers = () =>
      UserService.findAllUsers().then(users => setUsers(users));
  useEffect(findAllUsers, []);

  return(
      <div>
        <h1>
          Users
        </h1>
          <button className = "btn btn-primary"
                  onClick = {() => navigate("/users/new/edit")}>
            New User...
          </button>
        <ul className="list-group">
          {
            users.map(user =>
              <li className="list-group-item" key={user.id}>
                {user.firstname}&nbsp;{user.lastname}
                &nbsp;
                <button className = "btn btn-primary"
                        onClick = {() => navigate(`/users/${user.id}/edit`)}>
                  Edit
                </button>
                &nbsp;
                <button className = "btn btn-primary"
                        onClick = {() => navigate(`/users/${user.id}/transitcards`)}>
                  View Cards
                </button>
              </li>
            )
          }
        </ul>
      </div>
  )
}

export default UserList;