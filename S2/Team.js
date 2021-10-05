"use strict";

class Team {

    constructor(teamname) {
        this.teamname = teamname;
        this.trainer = '';
        this.roster = [];
    }

    describe() {
        return `${this.teamname} with trainer ${this.trainer} 
        has these pokemon : ${[this.roster]}`
    }
}


export default Team