import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';
import '../App.css';
import ball from '../images/ball.jpeg';
import shoe from '../images/show.jpeg';
import yellow from '../images/yellow.jpeg';
import red from '../images/red.jpeg';
import clock from '../images/clock.jpeg';
import HistoryPlayer from './HistoryPlayer';


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

            <div>
                <p>{props.playerData.first_name}{" "}{props.playerData.second_name}</p>
                <table class="table table-hover">
                <thead id="freeze">
                   <tr>
                      <th scope="col"><img id="imagePlayersData" src={ball}/></th>
                      <th scope="col"><img id="imagePlayersData" src={shoe}/></th>
                      <th scope="col"><img id="imagePlayersData" src={yellow}/></th>
                      <th scope="col"><img id="imagePlayersData" src={red}/></th>
                      <th scope="col"><img id="imagePlayersData" src={clock}/></th>
                   </tr>
                </thead>
                <tbody>
                      <td>{props.playerData.goals_scored}</td>
                      <td>{props.playerData.assists}</td>
                      <td>{props.playerData.yellow_cards}</td>
                      <td>{props.playerData.red_cards}</td>
                      <td>{props.playerData.minutes}</td>
                </tbody>
                </table>
            </div>

            <ul class="nav nav-tabs">
               <li class="nav-item">
                  <a class="nav-link active" aria-current="page" >History</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>

            <HistoryPlayer history={playerHistory} teamsInfo={props.teamsInfo} data={props.playerData}/>

          </div>
        </div>
      );
    }
   
  };

  export default Popup;
