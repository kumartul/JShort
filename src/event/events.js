// Function: Adds an event listener to an element
function on(eventsArray, callback) {
    if(!eventsArray && !callback)
    {
        // Throw an error if both the event and callback are falsy values
        throw new Error("Failed to execute 'on': Please provide a valid event and callback function");
    }
    else if(eventsArray && !callback)
    {
        // Throw an error if callback is a falsy value
        throw new Error("Failed to execute 'on': Please provide a valid callback function");
    }
    else
    {
        if(Array.isArray(eventsArray)){
            for(let i = 0; i < eventsArray.length; i++){
                if(!eventsArray[i]){
                    throw new Error(`Failed to execute 'on': ${eventsArray[i]} is not a valid event`)
                }
                else{
                    this.element.addEventListener(eventsArray[i], callback);
                }
            }
        }
        else{
            throw new Error("Failed to execute 'on': Event list must be an array");
        }
    }
}

// Function: Removes an event listener from an element
function off(event, functionToRemove){
    if(!event && !functionToRemove){
        // Throw an error if both the event and function that is to be removed is a falsy value
        throw new Error("Failed to execute 'off': Please provide a valid event and a function that is to be removed");
    }
    else if(event && !functionToRemove){
        // Throw an error if function to be removed is a fasly value
        throw new Error("Failed to execute 'off': Please provide a valid function that is to be removed");
    }
    else{
        this.element.removeEventListener(event, functionToRemove);
    }
}

export { on, off }


// Tasks
/*
1. Will not allow a user to attach an invalid event to an element
*/
