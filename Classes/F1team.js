class FoneTeam {
    constructor(id, team, engine, championships) {
        this.id = id;
        this.team = team;
        this.engine = engine;
        this.championships = championships
    }
    teamIntro() {
        return `${this.team} uses the ${this.engine}`
    }
}

module.exports = FoneTeam;