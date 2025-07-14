const getAge = ( birthYear, deathYear) => {
    if (!deathYear) return new Date().getFullYear() - birthYear; 
    return deathYear - birthYear;
}

const findTheOldest = function( people ) {
    if ((!Array.isArray(people)) || (people.length === 0)) return undefined;

    return people.reduce(( oldest, next ) => {
        const ageOfOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        const ageOfCurrent = getAge(next.yearOfBirth, next.yearOfDeath);

        return (ageOfCurrent > ageOfOldest) ? next : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
