import React, { useEffect, useState } from 'react';
import '../App.css';
import Utils from './Utils/Utils';
import ball from '../images/ball.jpeg';
import shoe from '../images/show.jpeg';
import yellow from '../images/yellow.jpeg';
import red from '../images/red.jpeg';
import clock from '../images/clock.jpeg';
import ARS from '../images/Teams/ARS.jpeg';
import AVL from '../images/Teams/AVL.jpeg';
import BHA from '../images/Teams/BHA.jpeg';
import BRE from '../images/Teams/BRE.jpeg';
import BUR from '../images/Teams/BUR.jpeg';
import CHE from '../images/Teams/CHE.jpeg';
import CRY from '../images/Teams/CRY.jpeg';
import EVE from '../images/Teams/EVE.jpeg';
import LEI from '../images/Teams/LEI.jpeg';
import LEE from '../images/Teams/LEE.jpeg';
import LIV from '../images/Teams/LIV.jpeg';
import MCI from '../images/Teams/MCI.jpeg';
import MNU from '../images/Teams/MUN.jpeg';
import NEW from '../images/Teams/NEW.jpeg';
import NOR from '../images/Teams/NOR.jpeg';
import SOU from '../images/Teams/SOU.jpeg';
import TOT from '../images/Teams/TOT.jpeg';
import WAT from '../images/Teams/WAT.jpeg';
import WHU from '../images/Teams/WHU.jpeg';
import WOL from '../images/Teams/WOL.jpeg';
import playerDetails from './Popup';
import Popup from './Popup';

function Players(props) {

    const [allPlayers , setAllPlayers] = useState([])
    let [playersDisplay , setPlayersDisplay] = useState([])
    const [teams , setTeams] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    useEffect(async () => {   

        let playersList = await Utils.getAllPlayers()
        let teams = await Utils.getTeams()
        setAllPlayers(playersList)
        setPlayersDisplay(playersList)
        setTeams(teams)   

    },[])
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    function returnTeamImageById(id){
       let filter = teams.filter((team) => team.id === id)
       let team = filter[0]
       console.log(team)
    //    let name = team.short_name;
    //    console.log(name)
    //    switch(name) {
    //     case "ARS":
    //       return ARS
    //     default:
    //       // code block
    //   }
    return AVL;


    }

    let display = playersDisplay.map((player , index) => {
        return (<tr key={index}>
            {/* <td><img id="imagePlayersData" src={returnTeamImageById(player.team)}></img></td> */}
            <td>{player.web_name}</td>
            <td>{player.goals_scored}</td>
            <td>{player.assists}</td>
            <td>{player.yellow_cards}</td>
            <td>{player.red_cards}</td>
            <td>{player.minutes}</td>
        </tr>)
    })


    return (
        <div>
             <input type="button" value="Click to Open Popup" onClick={togglePopup}/>


             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             {isOpen && <Popup
              content={<>
              <b>Design your Popup</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button>Test button</button>
              </>}
              handleClose={togglePopup}
              />}

            players list
            <table class="table table-hover">
            <thead id="freeze">
               <tr>
                  {/* <th scope="col"></th> */}
                  <th scope="col">Name</th>
                  <th scope="col"><img id="imagePlayersData" src={ball}/></th>
                  <th scope="col"><img id="imagePlayersData" src={shoe}/></th>
                  <th scope="col"><img id="imagePlayersData" src={yellow}/></th>
                  <th scope="col"><img id="imagePlayersData" src={red}/></th>
                  <th scope="col"><img id="imagePlayersData" src={clock}/></th>
                </tr>
            </thead>
            <tbody>
                {display}
            </tbody>
           </table>

        </div>
    );
}

export default Players;