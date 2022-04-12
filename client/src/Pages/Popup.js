import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';
import '../App.css';


function Popup(props) {

  let [playerNextFixtures , setNextFixtures] = useState([])
  let [playerHistory , setPlayersDisplay] = useState([])

    useEffect(async () => {  
      
      console.log(props.playerData)

       let next = await Utils.getPlayerNextFixtures(props.playerId)
       console.log(next)
       let history = await Utils.getPlayerHistory(props.playerId)
       console.log(history)

       setNextFixtures(next)
       setPlayersDisplay(history)
   },[])


    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <p>{props.playerId}</p>
        </div>
      </div>
    );
  };

  export default Popup;
