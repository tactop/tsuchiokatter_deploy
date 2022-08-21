import React from 'react';
import './Achive.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import Menu from '../../components/menu/Menu';
import useMedia from "use-media";
import { slide as MenuBurger } from 'react-burger-menu'
export default function Achive() {
    const isWide = useMedia({ minWidth: "1000px" });
    return (
        <>
            <Topbar />
            <Menu pageWrapId={"page-wrap"} />
            <div className="homeContainer" id="page-wrap">
                <div className='sideMargin'></div>
                <Rightbar />
                <div className='sideMargin'></div>
            </div>
        </>
    )
}