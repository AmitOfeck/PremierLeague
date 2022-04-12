const express = require('express');
const dataBL = require('../models/dataBL');
const router = express.Router();


//Get all Teams
router.route('/Teams').get(async (req, resp) => {
    const data = await dataBL.getTeams();
    return resp.json(data);
})

//Get all fixtures
router.route('/GetAllFixtures').get(async (req, resp) => {
    const data = await dataBL.getAllFixtures();
    return resp.json(data);
})

//Get specific ficture
router.route('/getFixtureByGameweek/:gameweek').get(async (req, resp) => {
    const gameweek = req.params.gameweek;
    const data = await dataBL.getFixtureByGameweek(gameweek);
    return resp.json(data);
})

//Get all events
router.route('/getAllEvents').get(async (req, resp) => {
    const data = await dataBL.getAllEvents();
    return resp.json(data);
})

router.route('/getAllPlayers').get(async (req, resp) => {
    const data = await dataBL.getAllPlayers();
    return resp.json(data);
})

router.route('/getPlayerNextFixtures/:playerId').get(async (req, resp) => {
    const playerId = req.params.playerId;
    const data = await dataBL.playerNextFixtures(playerId);
    return resp.json(data);
})

router.route('/getPlayerHistory/:playerId').get(async (req, resp) => {
    const playerId = req.params.playerId;
    const data = await dataBL.playerHisory(playerId);
    return resp.json(data);
})


module.exports = router;


