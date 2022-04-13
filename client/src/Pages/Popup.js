import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';
import '../App.css';


function Popup(props) {

  let [playerNextFixtures , setNextFixtures] = useState([])
  let [playerHistory , setPlayersDisplay] = useState([])
  const [isOpen, setIsOpen] = useState(true);


    useEffect(async () => {  
      
      console.log(props.playerId)
      console.log(props.playerData)

       let next = await Utils.getPlayerNextFixtures(props.playerId)
       console.log(next)
       let history = await Utils.getPlayerHistory(props.playerId)
       console.log(history)

       setNextFixtures(next)
       setPlayersDisplay(history)
   },[])

    if(isOpen){
      return (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={() => setIsOpen(!isOpen)}>x</span>
            <p>{props.playerId}</p>
          </div>
        </div>
      );
    }
   
  };

  export default Popup;
