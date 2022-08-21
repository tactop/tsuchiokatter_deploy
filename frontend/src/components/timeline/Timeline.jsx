import React, { useContext, useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import NameRegist from '../nameRegist/NameRegist';
import "./Timeline.css";
import axios from "axios";
import { AuthContext } from '../../state/AuthContext';
//import { Posts } from "../../dummyData";
export default function Timeline({ username }) {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      //console.log(username);
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/all`);
      // setPosts(response.data.sort((post1, post2) => {
      //   return new Date(post2.createdAt) - new Date(post1.createdAt)
      // }));
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        {user ? <Share /> : <NameRegist />}
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
