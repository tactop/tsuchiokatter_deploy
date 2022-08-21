import { Description, EmojiEvents, Home, Person } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link';
import React from 'react'
import SidebarFriend from '../sidebarFriend/SidebarFriend'
import "./Sidebar.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { AuthContext } from '../../state/AuthContext';
export default function Sidebar() {
    //const { user } = useContext(AuthContext);
    return (
        <div className='sidear'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <li className="sidebarListItem">
                            <Home className='sidebarIcon' />
                            <span className="sidebarListItemText"> ホーム</span>

                        </li>
                    </Link>
                    <Link to="/achived" style={{ textDecoration: "none", color: "black" }}>
                        <li className="sidebarListItem">
                            <EmojiEvents className='sidebarIcon' />
                            <span className="sidebarListItemText"> 実績</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Description className='sidebarIcon' />
                        <span className="sidebarListItemText"> 使い方</span>
                    </li>
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon' />
                        {/* <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "black" }}> */}
                        <span className="sidebarListItemText"> プロフィール</span>
                        {/* </Link> */}
                    </li>
                    {/* <li className="sidebarListItem">
                        <Settings className='sidebarIcon' />
                        <span className="sidebarListItemText"> 設定</span>
                    </li>  */}
                </ul>
                <hr className="sidebarHr" />
                <ul className="sidebaeFriendList">
                    {/* {Users.map((user) => (
                        <SidebarFriend user={user} key={user.id} />
                    ))} */}
                </ul>
            </div>
        </div >
    )
}
