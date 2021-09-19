// Function: Throws an error
function error(message){
    // Throw an error if the message is a falsy value
    if(!message){
        throw new Error("Failed to execute 'error': Please provide a valid error message");
    }

    // Throw an error if the message is not a string
    if(typeof message !== 'string'){
        throw new Error("Failed to execute: 'error': Error message must be a string");
    }
    else{
        throw new Error(message);
    }
}

export { error }