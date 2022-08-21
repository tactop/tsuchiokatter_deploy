import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css"
export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //パスワードと確認用パスワードの照合
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("パスワードと確認用パスワードが違います");
        } else {
            try {
                //registerAPIを叩く
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (error) {
                console.log(error);
            }
        }

    };
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>
                        Real SNS
                    </h3>
                    <span className="loginDesc">本格的なSNSを、自分の手で</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className="loginMsg">新規登録はこちら</p>
                        <input type="text"
                            placeholder='ユーザー名'
                            className="loginInput"
                            required
                            ref={username} />
                        <input type="email"
                            placeholder='Eメール'
                            className="loginInput"
                            required
                            ref={email} />
                        <input type="password"
                            placeholder='パスワード'
                            className="loginInput"
                            required
                            minLength="6"
                            ref={password} />
                        <input type="password"
                            placeholder='確認用パスワード'
                            className="loginInput"
                            required
                            minLength="6"
                            ref={passwordConfirmation} />
                        <button className="loginButton" type='submit'>
                            サインアップ
                        </button>
                        <button className="loginRegisterButton">ログイン</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
