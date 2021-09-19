import { idRegex, classRegex, tagRegex, specialRegex } from './regex.js';

// Function: Selects element from the Document Object Model (DOM)
function $(selector) {     
    // If selector is empty, then throw an error  
    if(!selector) {
        throw new Error(`Failed to execute '$': The provided selector is empty`);
    }

    // If selector is not a string, then throw an error
    if(typeof selector !== 'string') {
        throw new Error(`Failed to execute: '$': The provided selector is not a string`);
    }

    const jshortObj = {
        element: document.querySelector(selector)
    }

    return jshortObj;
}

export { $ }

// Tasks
/*
1. Will enhance error-catching using regular expressions
*/