import './FeedPage.css'
import React, {useEffect, useState} from 'react';
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import Post from "./Post.jsx";


function FeedPage() {
  const defaultSentence = 'whats on your mind..?';
  const [postContent, setPostContent] = useState(defaultSentence);
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {

      const userFollowsPosts = await api.getAllUserFollowsPosts();
      setPosts(userFollowsPosts);
    }

    fetchPosts();
  }, []);

  const handleFocus = () => {
    if (postContent === defaultSentence) {
      setPostContent("");
    }
  };

  const handleBlur = () => {
    if (postContent === "") {
      setPostContent(defaultSentence);
    }
  };

  const handlePost = async  (e) => {
    e.preventDefault();
    
  };

  return (
      <div className="feed">
        <div className="feed-container">
          <form onSubmit={handlePost}>
            <textarea className="postTextArea" id="postContent" name="postContent"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <button className="submit" onClick={async () => {
              api.createPost(postContent).then((response) => {
                console.log(authService.getCurrentUser().name, 'posted a post');
                if (!response["error"]){
                  window.location.reload();
                }
              })
            }}>post</button>
          </form>
        </div>

        <div>
          {posts.map((item, index) => (
              <Post key={index} content={item.content} postId={item.id} timeStamp={item.timeStamp} posterId={item.posterId}></Post>
          ))}
        </div>
      </div>
  );
}


export default FeedPage

