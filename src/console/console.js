// Function: Logs a message to the console
function log(message){
    console.log(message);
}

// Function: Clears the console
function cclear(){
    console.clear();
}

// Function: Debugs a set of data
function debug(...data){
    console.debug(data);
}

// Function: Throws an error in the console
function cerror(message){
    // Throw an error if the message is a falsy value
    if(!message){
        throw new Error("Failed to execute 'cerror': Please provide a valid error message");
    }
    else{
        console.error(message);
    }
}

// Function: Groups the data in the console
function cgrp(...data){
    console.group(data);
}

// Function: Shows the info in the console
function cinfo(...data){
    console.info(data);
}

// Function: Returns the memory info
function cmem(){
    return console.memory;
}

// Function: Shows the data in a tabular form
function ctbl(...data){
    console.table(data);
}

// Function: Shows a warning in the console
function cwarn(...data){
    console.warn(data);
}

// Function: Starts the timer with a label if passed or default
function ctime(label="default"){
    console.time(label);
}

// Function: Ends the timer
function ctimend(label="default"){
    console.timeEnd(label);
}

// Function: Traces the data in the console
function ctrc(data){
    console.trace(data);
}

export { log, cclear, debug, cerror, cgrp, cinfo, cmem, ctbl, cwarn, ctime, ctimend, ctrc }