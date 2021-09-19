// Function: Checks whether the element has a certain class or not
function hasClass(className){
    // If the className is a falsy value, then throw an error
    if(!className){
        throw new Error("Failed to execute 'hasClass': Please provide a valid class name");       
    }

    // Throw an error if the class name is not a string
    if(typeof className !== 'string'){
        throw new Error("Failed to execute 'hasClass': Class name must be a string");       
    }
    
    if(this.element.classList.contains(className)){
        return true;
    }
    else{
        return false;
    }
}

// Function: Checks whether the element has the class names passed by the programmer
function hasClasses(classNames=[]){
    let isNotClassName = false;

    // If the arugment is not an array, then throw an error
    if(Array.isArray(classNames)){
        for(let i = 0; i < classNames.length; i++){
            if(!this.element.classList.contains(classNames[i])){
                isNotClassName = false;
                break;
            }
        }
        if(isNotClassName){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        throw new Error("Failed to execute 'hasClasses': An array of class names must be passed")
    }
}

// Function: Removes a class from an element
function removeClass(className){
    // Throw an error if the className is a falsy value
    if(!className){
        throw new Error("Failed to execute 'removeClass': Please provide a valid class name");
    }
    
    // Throw an error if the class name is not a string
    if(typeof className !== 'string'){
        throw new Error("Failed to execute 'removeClass': Class name must be a string");       
    }

    // Throw an error if the className doesn't exists
    if(!(this.element.classList.contains(className))){
        throw new Error(`Failed to execute 'removeClass': ${className} doesn't exists`);
    }
    else{
        this.element.classList.remove(className);
    }
}

// Function: Removes multiple classes of an element
function removeClasses(classNames=[]){
    // Throw an error if the argument is not an array
    if(Array.isArray(classNames)){
        for(let i = 0; i < classNames.length; i++){
            if(this.element.classList.contains(classNames[i])){
                this.element.classList.remove(classNames[i]);
            }
            else{
                throw new Error(`Failed to execute: 'removeClasses': The element doesn't contains a class named '${classNames[i]}'`);
            }
        }
    }
    else{
        throw new Error("Failed to execute 'removeClasses': An array of class names must be passed")
    }
}

// Function: Adds a class to an element
function addClass(className){
    // Throw an error if the class is a falsy value
    if(!className){
        throw new Error("Failed to execute 'addClass': Please provide a valid class name");
    }

    // Throw an error if the class name is not a string
    if(typeof className !== 'string'){
        throw new Error("Failed to execute 'addClass': Class name must be a string");       
    }

    // If the class already exists, then throw an error
    if(this.element.classList.contains(className)){
        throw new Error(`Failed to execute 'addClass': ${className} already exists`)
    }
    else{
        this.element.classList.add(className);
    }
}

// Function: Adds multiple classes to an element
function addClasses(classNames){
    // Throw an error if the argument is not an array
    if(Array.isArray(classNames)){
        for(let i = 0; i < classNames.length; i++){
            if(classNames[i]){
                this.element.classList.add(classNames[i]);
            }
            else{
                throw new Error(`Failed to execute 'addClasses': ${classNames[i]} is not a valid class name`)
            }
        }
    }
    else{
        throw new Error("Failed to execute 'addClasses': An array of class names must be passed")
    }
}

// Function: Returns all the existing classes of an element
function classes(){
    return this.element.classList;
}

export { hasClass, hasClasses, removeClass, removeClasses, addClass, addClasses, classes }


// Tasks
/*
1. Allow the programmer to pass multiple class names as arguments
2. Will write a toggleClass() method
*/