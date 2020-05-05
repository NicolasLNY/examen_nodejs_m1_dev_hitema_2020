const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {


        let peopleIndex = this.peoples.indexOf(this.peoples.filter(person => person.id = id))
        this.peoples[peopleIndex] = people;

        fs.writeFile(__dirname + '/people.json', JSON.stringify(this.peoples), function writeJSON(error) {
            if (error) return console.log(error);
        });
    }
    
    getPeople(filters) {

             if(filters = null) {
                return this.peoples;
            } else {
                return this.peoples.filter(filters);
            }

        }
}
