const FoneTeam = require('./F1team')

class Driver extends FoneTeam {
    constructor(name, team, podiums)
    super(id, brand, engine, championships) {
        this.name = name;
        this.team = team
        this.podiums = podiums;
    }
    teamIntro() {
        return `${this.name} uses the ${this.engine}`
    }
}

module.exports = FoneTeam;