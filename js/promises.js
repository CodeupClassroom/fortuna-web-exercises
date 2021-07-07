"use strict";
// ======================= WAIT EXERCISE

const wait = num => {
    return new Promise((res) => {
        setTimeout(res, num);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// ======================= GITHUB API EXERCISE