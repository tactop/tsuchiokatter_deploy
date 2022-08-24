import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react';
import { AuthContext } from '../../state/AuthContext';
import StarsIcon from '@mui/icons-material/Stars';
import "./Share.css";

export default function Share() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [err, setErr] = useState();

    const [point, setPoint] = useState();
    useEffect(() => {
        const fetchPoint = async () => {
            const currentUser = await axios.get(`/api/users?username=${user.username}`);
            setPoint(currentUser.data.point);
        };
        if (user) {
            fetchPoint();
        } else {
            setPoint(0);
        }

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user.userId,
            desc: desc.current.value
        }
        try {
            await axios.post("/api/posts", newPost);
            window.location.reload();
        } catch (error) {
            console.log(error);
            setErr(error.response.data.msg);
        }
    }
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src={PUBLIC_FOLDER + "/tsuchioka.jpg"}
                        alt="" className='shareProfileImg' />
                    <input type="text" className='shareInput' placeholder='今何してる？'
                        ref={desc} />
                </div>
                <div className="shareButtons">
                    <div className='pointArea'>
                        <StarsIcon className='coinIcon' />
                        <span className="pointText">{point}P</span>
                    </div>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <button className="shareButton" type="submit">投稿する</button>
                    </form>
                </div>
                {err
                    &&
                    <div>
                        <h4 className="errorMessage">
                            {err}
                        </h4>
                    </div>
                }
            </div>
        </div >
    )
}
