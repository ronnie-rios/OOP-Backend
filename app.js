const express = require('express');

const app = express();
const port = 9090;
const teamController = require('./routes/teamController');
const driverController = require('./routes/driverController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/teams', teamController);
app.use('drivers', driverController);

const listener = () => {
    console.log(`server running on ${port}`)
}

app.listen(port, listener)