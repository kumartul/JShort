// Function: Checks if the argument is an integer or not
function isInt(value){
    if(Math.round(value) - value === 0){
        return true;
    }
    else{
        return false;
    }
}

// Function: Checks if the argument is a boolean or not
function isBool(value){
    if(typeof value !== 'boolean'){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is a string or not
function isStr(value){
    if(typeof value !== 'string'){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is a decimal or not
function isDecimal(value){
    if(Math.floor(value) - value !== 0){
        return true;
    }
    else{
        return false;
    }
}

// Function: Checks if the argument is an object or not
function isObj(value){
    if(typeof value !== 'object' || Array.isArray(value) || value === null){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is a function or not
function isFunc(value){
    if(typeof value !== 'function'){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is a symbol or not
function isSym(value){
    if(typeof value !== 'symbol'){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is undefined or not
function isUndefined(value){
    if(typeof value !== 'undefined'){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is null or not
function isNull(value){
    if(typeof value !== null){
        return false;
    }
    else{
        return true;
    }
}

// Function: Checks if the argument is an array or not
function isArray(value){
    if(Array.isArray(value)){
        return true;
    }
    else{
        return false;
    }
}

export { isInt, isBool, isStr, isDecimal, isObj, isFunc, isSym, isUndefined, isNull, isArray }