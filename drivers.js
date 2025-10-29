export class Driver {
    constructor(surname, name, team, number) {
        this.surname = surname;
        this.name = name;
        this.team = team;
        this.number = number;
        this.points = 0; // start of the season
        this.stats = 0; // placeholder for additional statistics
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}
