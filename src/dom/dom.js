// Function: Returns the number of children of an element
function countChildren(){
    return this.element.childElementCount;
}

// Function: Returns the innerHTML of the element
function html(innerHTML=null){
    if(!innerHTML){
        return this.element.innerHTML;
    }
    else{
        this.element.innerHTML = innerHTML;
    }
}

// Function: Returns the innerText of the element
function text(innerText){
    if(!innerText){
        return this.element.innerText;
    }
    else{
        this.element.innerText = innerText;
    }
}

// Function: Clones the current element and returns it
function clone(){
    return this.element;
}

// Function: Appends or prepends a node to an element
function insert(node, insertAtTop=false){
    if(node){
        if(!insertAtTop){
            this.element.innerHTML += node;
        }
        else{
            let currentContent = this.element.innerHTML;
            this.element.innerHTML = "";
            this.element.innerHTML = node + currentContent;
        }
    }
}

// Function: Removes the innerHTML of an element
function empty(){
    this.element.innerHTML = "";
}

// Function: Removes an element 
function remove(){
    const parentElement = this.element.parentElement;
    parentElement.removeChild(this.element);
}

export { countChildren, html, text, clone, insert, empty, remove }


// Tasks
/*
1. Allow a programmer to append or prepend multiple nodes at once
*/