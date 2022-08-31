import React, { useContext, useEffect, useState } from 'react'
import "./Rightbar.css";
import { EmojiEvents } from '@mui/icons-material';
import { AuthContext } from "../../state/AuthContext"
import axios from 'axios';

export default function Rightbar() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [achiveds, setAchiveds] = useState([]);
  //ここの途中
  useEffect(() => {
    const fetchAchive = async () => {
      const achivedData = await axios.get(`/api/users/achieve/list?username=${user.username}`);
      setAchiveds(achivedData.data);
    };
    if(user){fetchAchive();}

  }, [user]);
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <h4 className="rightbarTitle">
          <EmojiEvents className='trophyIcon' />実績一覧
        </h4>
        <div className="achiveda">
          <div className="achiveds">
            <ul className="genres">
              {achiveds.map((achiveGenre,index) => (
                <li className="genre" key={index}>
                  <div className='achivedgenreTop'>
                    <span className="genreTitel">
                      {achiveGenre.genreDisp}</span>
                    <span className="genreAchivedRatio"
                      style={(achiveGenre.achievedNumInGenre == achiveGenre.numInGenre) ? { color: '#e6b422' } : {}}>
                      {achiveGenre.achievedNumInGenre}/{achiveGenre.numInGenre}</span>
                  </div>
                  {achiveGenre.achievedListInGenre.map((typename) => (
                    <div className='achivedWords'>
                      <span className="achivedWord">{typename}</span>
                    </div>
                  ))}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
