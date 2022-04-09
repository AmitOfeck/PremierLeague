import React, { useEffect, useState } from 'react';
import '../App.css';
import Utils from './Utils/Utils';
import ball from '../images/ball.jpeg';
import shoe from '../images/show.jpeg';
import yellow from '../images/yellow.jpeg';
import red from '../images/red.jpeg';
import clock from '../images/clock.jpeg';

function Players(props) {

    const [allPlayers , setAllPlayers] = useState([])
    let [playersDisplay , setPlayersDisplay] = useState([])

    useEffect(async () => {   

        let playersList = await Utils.getAllPlayers()
        setAllPlayers(playersList)
        setPlayersDisplay(playersList)

    },[])

    let display = playersDisplay.map((player , index) => {
        return (<tr key={index}>
            <td><img src={player.photo}></img></td>
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
            players list
            <table class="table table-hover">
            <thead>
               <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col"><img id="imagePlayersData" src={ball}/></th>
                  <th scope="col"><img id="imagePlayersData" src={shoe}/></th>
                  <th scope="col"><img id="imagePlayersData" src={yellow}/></th>
                  <th scope="col"><img id="imagePlayersData" src={red}/></th>
                  <th scope="col"><img id="imagePlayersData" src={clock}/></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                 <td>@mdo</td>
                </tr>
                {display}
            </tbody>
           </table>

        </div>
    );
}

export default Players;