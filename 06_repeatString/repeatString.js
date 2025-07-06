//create a function that takes two arguments string and num
// create a variable called results to hold the results, empty str
// create a loop that will repeat a given number of times (num) times 
// add string to results after every iteration
// return results 
// call the function and pass in the arguments.
const number = () => {
    Math.floor(Math.random)
}


const repeatString = (string, num) => {
    if (num < 0) {
        return 'ERROR';
    }
    let results = '';
    for (let i = 0; i < num; i++) {
        results += string;
    }
    return results;
}

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('', 10);


// Do not edit below this line
module.exports = repeatString;
