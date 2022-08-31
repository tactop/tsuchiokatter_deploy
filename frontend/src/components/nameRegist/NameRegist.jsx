import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../state/AuthContext';
import "./NameRegist.css";

export default function NameRegist() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    const username = useRef();
    const [err, setErr] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username.current.value);
        console.log("こんばんは")
        const newUser = {
            username: username.current.value,
        };
        try {
            const response = await axios.post("/api/auth/register", newUser);
            dispatch({
                type: "LOGIN_SUCCESS", payload: {
                    username: response.data.username,
                    userId: response.data._id,
                }
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
            setErr("登録に失敗しました:" + (error.response.data.msg));
        }
    }
    return (
        <div className='registBox'>
            <div className="registWrapper">
                <h4>
                    投稿を行うにはユーザー名を登録してください
                </h4>
                <div className="registArea">
                    <input type="text" className='registInput' placeholder='ユーザー名を入力して下さい'
                        minLength="3" maxLength="20"
                        ref={username} />
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <button className="registButton" type="submit">登録する</button>
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
