import React from "react";
import { slide as MenuBurger } from "react-burger-menu";
import { Link } from 'react-router-dom';
import { Description, EmojiEvents, Home, Person } from '@mui/icons-material'
import Sidebar from '../../components/sidebar/Sidebar';

import './Menu.css';
export default function Menu() {
    return (
        <MenuBurger>
            <Sidebar />

            {/* <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Home className='sidebarIcon' />
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <span className="sidebarListItemText"> ホーム</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <EmojiEvents className='sidebarIcon' />
                    <span className="sidebarListItemText"> 実績</span>
                </li>
                <li className="sidebarListItem">
                    <Description className='sidebarIcon' />
                    <span className="sidebarListItemText"> 使い方</span>
                </li>
                <li className="sidebarListItem">
                    <Person className='sidebarIcon' />
                    <span className="sidebarListItemText"> プロフィール</span>
                </li>
            </ul> */}
            {/* <Link to="/" className="menu-item" >
                ホームページ
            </Link>

            <Link to="/page-2" className="menu-item" >
                ページ2
            </Link>

            <Link to="/page-3" className="menu-item" >
                ページ3
            </Link>

            <Link to="/page-4" className="menu-item" >
                ページ4
            </Link> */}
        </MenuBurger>
    );
};