import './ExploreDogs.css'
import React, {useEffect, useState} from "react";

import UserProfileCard from "../UserProfileCard/UserProfileCard.jsx";


function ExploreDogs({userList, isFollowedDefault, mode="follow"}) {
  const [users, setUsers] = useState([]);

  const removeUser = (user_id) => {
    setUsers(users.filter((item) => item !== user_id));
  }
  
  useEffect(() => {
      setUsers(userList);
  }, [userList]);

  return (
      <div className="explore-dogs">
          {
            users.map((item, index) => (
              <UserProfileCard key={index} user_id={item} isFollowed={isFollowedDefault} mode={mode} removeUserCallBack={removeUser}></UserProfileCard>
          ))}
      </div>
  )
}


export default ExploreDogs

