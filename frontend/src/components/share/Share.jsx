import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { useState } from 'react';
import { AuthContext } from '../../state/AuthContext';
// import { AuthContext } from '../../state/AuthContext';
import "./Share.css";

export default function Share() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [err, setErr] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user.userId,
            desc: desc.current.value
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (error) {
            console.log(error);
            setErr("投稿に失敗しました:" + error.response.data.msg);
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
