import React from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../App.css';


function Nav(props) {

    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <div id="navBox">
            <p id="title"> PL Guessing Game</p>
            <ul class="nav nav-tabs">
                 <li class="nav-item" onClick={()=>navigate('/')}>
                      <a class="nav-link active" aria-current="page">Fixtures</a>
                 </li>
                 <li class="nav-item" onClick={()=>navigate('/Table')}>
                      <a class="nav-link">Table</a>
                 </li>
                 <li class="nav-item" onClick={()=>navigate('/Players')}>
                      <a class="nav-link">Players</a>
                 </li>
           </ul>
             
            </div>
        </div>
    );
}

export default Nav;