import React, {useEffect, useState} from "react";
import './FeedPage.css'
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";


function Post({username, content, postCreationTime}) {
    // const [ownerText, setOwnerText] = useState("loading owner...");

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
              <h2>Post by {username} </h2>
              <h2>{content.content}</h2>
              {/*<h2>{props.postCreationTime}</h2>*/}

              {/*<button className="pee" onClick={async () => {*/}
              {/*    await api.setPeePoleOwner(props.poleName, authService.getCurrentUser().id);*/}
              {/*    setOwnerText(authService.getCurrentUser().username);*/}
              {/*}}>Pee</button>*/}
          </div>
      </div>
  )
}

export default Post

