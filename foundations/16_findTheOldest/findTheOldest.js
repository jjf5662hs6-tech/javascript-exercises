const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const oldestAge = (oldest.yearOfDeath || currentYear - oldest.yearOfBirth);
        const personAge = (person.yearOfDeath || currentYear - person.yearOfBirth);

        if (personAge > oldestAge) {
            return person
        } else {
            return oldest
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
