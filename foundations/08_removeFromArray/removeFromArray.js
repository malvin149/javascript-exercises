const removeFromArray = function(array, ...items) {
    for (let i = 0; i < items.length; i++) {
        let index = array.indexOf(items[i]);
        while (index !== -1) {
            array.splice(index, 1)
            index = array.indexOf(items[i]);
        };
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
