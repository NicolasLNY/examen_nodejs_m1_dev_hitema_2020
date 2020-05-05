const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();
const fs = require('fs').promises;



app.use('/api/v1', v1);
v1.put('/people', async (req, res) => {

    let people = req.body;
    let updatedPeople = await peopleService.updatePeople(people);

    res.send(updatedPeople);

});

v1.get('/people', async (req, res) => {

    let listPeople = await peopleService.getPeople();
    res.send(listPeople);

});

module.exports = app;
