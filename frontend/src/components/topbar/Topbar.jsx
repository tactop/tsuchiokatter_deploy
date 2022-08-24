import { Chat, Notifications, Search } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import StarsIcon from '@mui/icons-material/Stars';
import "./Topbar.css"
import { AuthContext } from "../../state/AuthContext"
import axios from 'axios';
import useMedia from "use-media";

export default function Topbar() {
    const isWide = useMedia({ minWidth: "1000px" });
    const { user } = useContext(AuthContext);
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

    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>

            </div>
            <div className='topbarCenter'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>
                        土岡った―
                    </span>
                </Link>
            </div>
            <div className='topbarRight'>
                {/* {
                    isWide ||
                    <div className="topbarItemIcons">
                        <div className='topbarIconItem'>
                            <StarsIcon className='TopbarCoinIcon' />
                            <span className="topbarPoint">{point}P</span>
                        </div>
                    </div>
                } */}
            </div>
        </div>
    );
}
