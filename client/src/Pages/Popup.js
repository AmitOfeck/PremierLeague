import React, { useEffect, useState } from 'react';
import Utils from './Utils/Utils';
import '../App.css';
import ball from '../images/ball.jpeg';
import shoe from '../images/show.jpeg';
import yellow from '../images/yellow.jpeg';
import red from '../images/red.jpeg';
import clock from '../images/clock.jpeg';
import HistoryPlayer from './HistoryPlayer';
import PlayerNextFixtures from './PlayerNextFixtures';


function Popup(props) {

  let [playerNextFixtures , setNextFixtures] = useState([])
  let [playerHistory , setPlayersDisplay] = useState([])
  const [isOpen, setIsOpen] = useState(true);
  let [pageDisplay, setPageDisplay] = useState("history");


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

   let page = pageDisplay === "history" ? <HistoryPlayer history={playerHistory}
    teamsInfo={props.teamsInfo} data={props.playerData}/> : 
    <PlayerNextFixtures next={playerNextFixtures} 
    teamsInfo={props.teamsInfo} data={props.playerData}/>

 
    if(isOpen){
      return (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={() => setIsOpen(!isOpen)}>x</span>

            <div id="headerPlayer">
                <p>{props.playerData.first_name}{" "}{props.playerData.second_name}</p>
                <table class="table table-hover">
                <thead>
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
               <li class="nav-item" onClick={() =>setPageDisplay("history")}>
                  <a class={pageDisplay === "history" ? "nav-link active" : "nav-link disabled"} aria-current="page">History</a>
               </li>
               <li class="nav-item" onClick={() =>setPageDisplay("next")}>
                  <a class={pageDisplay === "next" ? "nav-link active" : "nav-link disabled"}>Fixtures</a>
              </li>
            </ul>

            {page}

            

          </div>
        </div>
      );
    }
   
  };

  export default Popup;
