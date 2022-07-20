const express = require('express');
const router = express.Router();
const FoneTeam = require('../Classes/F1team');

const data = require('../data/data');
let teams = data.teams

router.get('/', (req, res) => {
    if (teams.length > 0) {
        res.status(200).json(teams)
    } else {
        res.status(400).json({
            message: 'not found'
        })
    };
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const team = teams.find(team => team.id == id);
    res.status(200).json(team);
});

router.post('/', (req, res) => {
    const { id, team, engine, championships } = req.body;
    let newTeam = new FoneTeam(id, team, engine, championships);
    teams.push(newTeam);

    res.status(201).json({
        message: 'team created'
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const newTeamList = teams.filter(team => team.id != id)
    teams = newTeamList;
    
    res.status(200).json(teams);
})

module.exports = router;