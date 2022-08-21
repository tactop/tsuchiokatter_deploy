import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import { useParams } from 'react-router-dom'
import "./Profile.css"

export default function Profile() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const username = useParams().username;
    //console.log(username)
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            // console.log(`/users/:${post.userId}`);
            const response = await axios.get(`/users?username=${username}`);
            setUser(response.data);
        };
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={PUBLIC_FOLDER + "/post/3.jpeg"} alt=""
                                className='profileCoverImg' />
                            <img src={user.profilePicture ?
                                PUBLIC_FOLDER + user.profilePicture
                                : PUBLIC_FOLDER + "/person/noAvatar.png"}
                                alt=""
                                className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline username={username} />
                        <Rightbar user={user} />
                    </div>

                </div>
            </div>
        </>
    )
}
