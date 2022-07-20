const Driver = require('../Classes/Driver')

const driver1 = new Driver(1, "Red Bull", "Honda Engine", "1", "VerStappen", "65")
const driver2 = new Driver(2, "Mercedes", "Mercedes Engine", "7", "Hamilton", "183")
const driver3 = new Driver(3, "Aston Martin", "Mercedes Engine", "4", "Vettel", "122")
const driver4 = new Driver(4, "Alpine", "Renault Engine", "1", "Alonso", "98")

const drivers = [driver1, driver2, driver3, driver4]

module.exports = { drivers }