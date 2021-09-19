// Function: Checks whether the element has a certain id or not
function hasId(id){
    // Throw an error if the id is a falsy value
    if(!id){
        throw new Error("Failed to execute 'hasId': Please provide a valid id name");
    }

    // Throw an error if the id name is not a string
    if(typeof id !== 'string'){
        throw new Error("Failed to execute 'hasId': Id name must be a string");       
    }
    
    if(this.element.id === id){
        return true;
    }
    else{
        return false;
    }
}

// Function: Removes the id from an element
function removeId(){
    this.element.removeAttribute("id");
}

// Function: Changes the id of an element
function changeId(id){
    // Throw an error if the id is a falsy value
    if(!id){
        throw new Error("Failed to execute 'changeId': Please provide a valid id name");
    }

    // Throw an error if the id name is not a string
    if(typeof id !== 'string'){
        throw new Error("Failed to execute 'changeId': Id name must be a string");       
    }
    else{
        this.element.id = id;
    }
}

// Function: Returns the id of an element
function id(){
    return this.element.id;
}


export { hasId, removeId, changeId, id }

// Tasks
/*
1. Will write a toggleId() method
*/