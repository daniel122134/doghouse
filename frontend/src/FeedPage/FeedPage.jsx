import './FeedPage.css'
// import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import {useNavigate} from "react-router-dom";
import Post from "./Post.jsx";


function FeedPage() {
  const defaultSentence = 'whats on your mind..?';
  const [postContent, setPostContent] = useState(defaultSentence);
  // const [password, setPassword] = useState('');
  // const [remember, setRemember] = useState(false);
  // const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const userFollowsPosts = await api.getAllUserFollowsPosts();
      //const postsForUser = await api.getAllPostsForUser();
      //const combinedPosts = [...userFollowsPosts, ...postsForUser];
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
    console.log(authService.getCurrentUser().name, 'posted a post');
    window.location.reload();
  };

  return (
      <div className="feed">
        <div className="feed-container">
          <form onSubmit={handlePost}>
            <textarea
                className="textareas"
                id="postContent"
                name="postContent"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <button type="submit" className="submit" onClick={async () => {
              await api.createPost(postContent);
            }}>post</button>
          </form>
        </div>

        <div>
          {posts.map((item, index) => (
              <Post key={index} content={item.content} postId={item.id} timeStamp={item.timeStamp}></Post>
          ))}
        </div>
      </div>
  );
}


export default FeedPage

