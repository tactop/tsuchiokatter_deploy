import React, { useContext } from 'react';
import './Home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import Menu from '../../components/menu/Menu';
import useMedia from "use-media";
import { slide as MenuBurger } from 'react-burger-menu'
import { AuthContext } from '../../state/AuthContext';
export default function Home() {
    const isWide = useMedia({ minWidth: "1000px" });
    const { user } = useContext(AuthContext);
    return (
        <>
            <Topbar />
            <Menu pageWrapId={"page-wrap"} />
            <div className="homeContainer" id="page-wrap">
                {isWide && <Sidebar />}
                <Timeline />
                {/* {(isWide && user) && <Rightbar />} */}
                 {(isWide) && <Rightbar />}
            </div>
        </>
    )
}