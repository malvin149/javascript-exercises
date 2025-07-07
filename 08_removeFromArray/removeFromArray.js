// declare a function called removeFromArray 
// takes two arguments and array and restParams
// filters the array and returns items that are not included in the restParam

const removeFromArray = function(array, ...elementsToRemove) {

    return array.filter(item => {
        return !elementsToRemove.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
