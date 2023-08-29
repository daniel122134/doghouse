import React, {useEffect, useState} from "react";
import './FeedPage.css'
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";


function Post({content, postId, timeStamp}) {
    const [likeButtonText, setLikeButtonText] = useState("Like");

  // async function loadOwner() {
  //   const currentOwner = (await api.getPoleOwner(props.poleName)).username;
  //   setOwnerText(currentOwner);
  // }
  //
  // useEffect(() => {
  //   loadOwner()
  // }, []);
  
  return (
      <div className="posts">
          <div className="post">
              <h3>Post by: {authService.getCurrentUser().username} </h3>
              <h4>{content}</h4>
              <p>Updated at: {timeStamp}</p>

              <button className="like" onClick={async () => {
                  await api.addLike(postId); //post ID
                  setLikeButtonText("Liked");
              }}>{likeButtonText}</button>
          </div>
      </div>
  )
}

export default Post

