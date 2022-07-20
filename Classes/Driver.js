const FoneTeam = require('./F1team')

class Driver extends FoneTeam {
    constructor(name, podiums) {
    super(id, team, engine, championships) 
        this.name = name;
        this.podiums = podiums;
    }
    driver() {
        return `${this.name} is on the ${this.team}`
    }
}

module.exports = Driver;