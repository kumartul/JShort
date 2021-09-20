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

// Function: Returns the parent of the element
function parent(){
    return this.element.parentElement;
}

// Function: Returns the parents of the element
function parents(){
    const parents = [];
    for(let elementToInspect = this.element.parentElement; elementToInspect !== undefined; elementToInspect = elementToInspect.parentElement){
        parents.push(elementToInspect);
    }
    return parents;
}

// Function: Returns all the siblings of the element
function siblings(){
    let siblings = [];
    const parent = this.element.parentElement;

    siblings = parent.children;
    siblings = Array.from(siblings);
    siblings = siblings.filter(elem => elem !== this.element);
    
    return siblings;
}

// Function: Returns the previous siblings of an element
function prevSiblings(){
    let siblings = [];
    const parent = this.element.parentElement;

    siblings = parent.children;
    siblings = Array.from(siblings);
    const indexOfCurrentElement = siblings.indexOf(this.element);

    siblings = siblings.filter((elem, index) => index < indexOfCurrentElement);

    return siblings;
}

// Function: Returns the next siblings of an element
function nextSiblings(){
    let siblings = [];
    const parent = this.element.parentElement;

    siblings = parent.children;
    siblings = Array.from(siblings);
    const indexOfCurrentElement = siblings.indexOf(this.element);

    siblings = siblings.filter((elem, index) => index > indexOfCurrentElement);

    return siblings;
}






export { countChildren, html, text, clone, insert, empty, remove, parent, parents, siblings, prevSiblings, nextSiblings }




// Tasks
/*
1. Allow a programmer to append or prepend multiple nodes at once
2. Replace function
3. moveForward function that will place the next element of the current element before the current element
4. moveBackward function => reverse of moveForward
5. instantiate function that will allow a programmer to generate an element and place it anywhere 
   in the document
*/