import React, {useEffect, useState} from "react";
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import "./UserProfileCard.css";

function UserProfileCard({user_id}) {
  const [userData, setUserData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {

      const response = await api.getUserData(user_id);
      setUserData(response);
      setIsFollowing(response.is_following);
      
    };

    fetchUserData();
  }, [user_id]);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        await api.unfollowUser(user_id);
      } else {
        await api.followUser(user_id);
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  return (
    <div className="user-profile-card">
      {userData && (
        <>
          <img src={userData.profile_picture} alt="Profile" className="profile-picture"/>
          <h3 className="username">{userData.username}</h3>
          <button className={isFollowing ? "unfollow-button" : "follow-button"} onClick={handleFollowToggle}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        </>
      )}
    </div>
  );
}

export default UserProfileCard;
