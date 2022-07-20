class FoneTeam {
    constructor(id, brand, engine, championships) {
        this.id = id;
        this.brand = brand;
        this.engine = engine;
        this.championships = championships
    }
    teamIntro() {
        return `${this.brand} uses the ${this.engine}`
    }
}

module.exports = FoneTeam;