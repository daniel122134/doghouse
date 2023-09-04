import './ExploreDogs.css'
import React, {useEffect, useState} from "react";

import UserProfileCard from "../UserProfileCard/UserProfileCard.jsx";


function ExploreDogs({followedUsers, isFollowedDefault}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      setUsers(followedUsers);
  }, [followedUsers]);

  return (
      <div className="explore-Dogs">
          {
            users.map((item, index) => (
              <UserProfileCard key={index} user_id={item} isFollowed={isFollowedDefault}></UserProfileCard>
          ))}
      </div>
  )
}


export default ExploreDogs

