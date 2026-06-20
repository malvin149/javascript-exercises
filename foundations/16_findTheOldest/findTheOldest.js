const getAge = (person) => 
    person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth;

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => 
        getAge(oldest) > getAge(person) ? oldest : person
    , people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
