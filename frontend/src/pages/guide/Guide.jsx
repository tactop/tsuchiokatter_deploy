import React from 'react'
import useMedia from 'use-media';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Menu from '../../components/menu/Menu';
import './Guide.css';
export default function Guide() {
    const isWide = useMedia({ minWidth: "1000px" });
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <Menu pageWrapId={"page-wrap"} />
            <div className="homeContainer" id="page-wrap">
                {isWide ?
                    <Sidebar />
                    : <div className='sideMarginMobile'></div>}
                <div className='maindiv'>
                    <h1 className="title">使い方</h1>
                    <ol>
                        <li className='guideList'>
                            <div className="guideBlock">
                                <span className="blockTitle">1. ユーザー登録</span>
                                <span className="desc">ユーザー名を入力して登録します。</span>
                                <img src={PUBLIC_FOLDER + "/nameRegistImg.jpg"}
                                    alt="" className="guideImg" />
                            </div>
                        </li>
                        <li className='guideList'>
                            <div className="guideBlock">
                                <span className="blockTitle">2. 投稿する</span>
                                <span className="desc">「ちつおか」などの特定のワードのみ投稿できます。投稿した内容は全員のタイムラインに表示されます。</span>
                                {/* <div className="imgArea">
                                    <img src={PUBLIC_FOLDER + "/toukou.jpg"}
                                    alt="" className="guideImg" />
                                    <img src={PUBLIC_FOLDER + "/dekimasen.jpeg"}
                                        alt="" className="guideImg" />
                                </div> */}
                                <img src={PUBLIC_FOLDER + "/toukou.jpg"}
                                    alt="" className="guideImg" />
                                <img src={PUBLIC_FOLDER + "/dekimasen.jpeg"}
                                    alt="" className="guideImg" />

                            </div>
                        </li>
                        <li className='guideList'>
                            <div className="guideBlock">
                                <span className="blockTitle">3. ポイント</span>
                                <span className="desc">投稿内容に応じてポイントが増減します。
                                    <br />例えば「ちつおか」と投稿すると3P加算されますが、「誠に遺憾です」と投稿すると3P消費します。
                                    ポイントが不足している場合は投稿できませんので、「ちつおか」と投稿してポイントを増やしてください。</span>
                                <img src={PUBLIC_FOLDER + "/point.JPG"}
                                    alt="" className="guideImg" />
                            </div>
                        </li>
                        <li className='guideList'>
                            <div className="guideBlock">
                                <span className="blockTitle">4. 実績</span>
                                <span className="desc">今までに投稿した内容が「実績一覧」に表示されています。</span>
                                <img src={PUBLIC_FOLDER + "/jisseki.JPG"}
                                    alt="" className="guideImg" />
                            </div>
                        </li>
                        <li className='guideList'>
                            <div className="guideBlock">
                                <span className="blockTitle">5. 未実装の機能</span>
                                <span className="desc">
                                    ログイン（現状では一度登録したユーザーを変更できません）<br />
                                    プロフィール編集<br />
                                    ユーザー個別ページ<br />
                                    リプライ<br />
                                </span>
                            </div>
                        </li>
                    </ol>
                </div>
                {isWide ?
                    <div className='sideMarginRight'></div>
                    : <div className='sideMarginMobile'></div>}
            </div>
        </>
    )
}
