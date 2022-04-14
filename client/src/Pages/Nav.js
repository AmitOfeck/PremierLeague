import React from 'react';
import '../App.css';


function Nav(props) {
    return (
        <div>
            <div id="navBox">
            <p id="title"> PL Guessing Game</p>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
             
            </div>
        </div>
    );
}

export default Nav;