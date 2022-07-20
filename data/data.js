const FoneTeam = require('../Classes/F1team');
const Driver = require('../Classes/Driver');

//teams
const team1 = new FoneTeam(1, "Red Bull", "Honda Engine", 5)
const team2 = new FoneTeam(2, "Mercedes", "Mercedes Engine", 13)
const team3 = new FoneTeam(3, "Aston Martin", "Mercedes Engine", 0)
const team4 = new FoneTeam(3, "Alpine", "Renault Engine", 11)

const teams = [team1, team2, team3, team4]

//drivers
const driver1 = new Driver(1, "Red Bull", "Honda Engine", "1", "Verstappen", "65");
const driver2 = new Driver(2, "Mercedes", "Mercedes Engine", "7", "Hamilton", "183");
const driver3 = new Driver(3, "Aston Martin", "Mercedes Engine", "4", "Vettel", "122");
const driver4 = new Driver(4, "Alpine", "Renault Engine", "1", "Alonso", "98")

const drivers = [driver1, driver2, driver3, driver4]
console.log(teams)
console.log(drivers)
module.exports = { teams, drivers }