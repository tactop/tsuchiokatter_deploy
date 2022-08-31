import { MoreVert } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'
import "./Post.css";
import axios from "axios";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
// import { AuthContext } from '../../state/AuthContext';
// import { Users } from "../../dummyData";

export default function Post({ post }) {
    // const [like, setLike] = useState(post.likes.length);
    // const [isLiked, setIsLiked] = useState(false);

    // const { user: currentUser } = useContext(AuthContext);

    // const handleLike = async () => {
    //     try {
    //         //いいねのAPI
    //         await axios.put(`posts/${post._id}/like`, { userId: currentUser._id });
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     setLike(isLiked ? like - 1 : like + 1);
    //     setIsLiked(!isLiked);
    // }
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            // console.log(`/users/:${post.userId}`);
            const response = await axios.get(`/api/users/?userId=${post.userId}`);
            // console.log(response);
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">

                    <div className="postTopLeft">
                        {/* <Link to={`/profile/${user.username}`}
                            style={{ textDecoration: "none", color: "black" }}> */}
                        <img src={PUBLIC_FOLDER + "/tsuchioka.jpg"}
                            alt=""
                            className='postProfileImg' />
                        <span className="postUserName">
                            {user.username}
                        </span>
                        {/* </Link> */}
                    </div>
                    <div className="postTopRight">
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    {post.img &&
                        <img src={PUBLIC_FOLDER + post.img} alt=""
                            className="postImg" />
                    }
                    <div className='postTopRighyRep'>
                        <CommentIcon />
                    </div>
                </div>
                {/* <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={PUBLIC_FOLDER + "/heart.png"} alt=""
                            className='likeIcon'
                            // onClick={() => handleLike()} /
                            />
                        <span className="postLikeCounter">{like}人がいいねを押しました</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}:コメント</span>
                    </div>
                </div> */}
            </div>
        </div >
    )
}
