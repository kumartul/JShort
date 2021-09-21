// Function: Sleeps for a certain amount of time
/*
1. Use this function with an asynchronous function and await keyword
*/
function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}