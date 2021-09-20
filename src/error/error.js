// Function: Throws an error
function error(message, errorType="Error"){
    // Throw an error if the message is a falsy value
    if(!message){
        throw new TypeError("Failed to execute 'error': Please provide a valid error message");
    }

    // Throw an error if the message is not a string
    if(typeof message !== 'string'){
        throw new TypeError("Failed to execute: 'error': Error message must be a string");
    }
    else{
        switch(errorType.toLowerCase()){
            case "error":
                throw new Error(message);
                break;
            case "typeerror":
                throw new TypeError(message);
                break;
            case "evalerror":
                throw new EvalError(message);
                break;
            case "syntaxerror":
                throw new SyntaxError(message);
                break;
            case "rangeerror":
                throw new RangeError(message);
                break;
            case "referenceerror":
                throw new ReferenceError(message);
                break;
            default:
                throw new TypeError("Failed to execute 'error': Invalid error type");
                break;
        }
    }
}

export { error }