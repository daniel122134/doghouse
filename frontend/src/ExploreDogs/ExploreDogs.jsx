import './ExploreDogs.css'
import React, {useEffect, useState} from "react";
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import UserProfileCard from "../UserProfileCard/UserProfileCard.jsx";


function ExploreDogs() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {

      const unfollowedUsers = await api.getAllUsersNotFollowedByUser();
      setUsers(unfollowedUsers);
    }

    fetchUsers();
  }, []);

  return (
      <div className="explore-Dogs">
        <div>
          {users.map((item, index) => (
              <UserProfileCard key={index} user_id={item.userid}></UserProfileCard>
          ))}
        </div>
      </div>
  )
}


export default ExploreDogs

