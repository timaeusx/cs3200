import React from "react";
import {Link} from "react-router-dom";
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
                onClick = {() => navigate("/users/new")}>
          New User...
          </button>
        <ul className="list-group">
          {
            users.map(user =>
                <li className="list-group-item" key={user.id}>
                  {user.firstname}&nbsp;{user.lastname}
                  &nbsp;<Link to={`/users/${user.id}/edit`}>
                    Edit
                  </Link>
                  &nbsp;<Link to={`/users/${user.id}/transitcards`}>
                    View Cards
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
  )
}

export default UserList;