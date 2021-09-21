// Function: Hides the element
function hide(duration=0, callback=()=>{}){
    this.element.style.transition = `all ${duration}s`;
    this.element.style.opacity = 0;

    // If the callback is not a function, then throw an error
    if(typeof callback === 'function'){
        callback();
    }
    else{
        throw new TypeError("Failed to execute 'hide': Callback must be of type function");
    }
}

// Function: Shows the element
function show(duration=0, callback=()=>{}){
    this.element.style.transition = `all ${duration}s`;
    this.element.style.opacity = 1;

    // If the callback is not a function, then throw an error    
    if(typeof callback === 'function'){
        callback();
    }
    else{
        throw new TypeError("Failed to execute 'show': Callback must be of type function");
    }
}

// Function: Makes the element blink
function blink(ms=0, callback=()=>{}){
    setTimeout(() => {
        this.element.style.opacity = 0;
        setTimeout(() => {
            this.element.style.opacity = 1;
        }, duration);
    }, duration);

    // If the callback is not a function, then throw an error
    if(typeof callback === 'function'){
        callback();
    }
    else{
        throw new TypeError("Failed to execute 'blink': Callback must be of type function");
    }
}

// Function: Moves the HTMLElement in a particular direction
// Use this function to move HTMLElements with absolute position
function move(element, velocity=1000, distance={ x: 0, y: 0 }, callback=()=>{}){
    let xPos = element.getBoundingClientRect().x;   // Current x position of the element
    let yPos = element.getBoundingClientRect().y;   // Current y position of the element

    let xDistance = distance.x - xPos;  // Distance to be covered along the x-axis
    let yDistance = distance.y - yPos;  // Distance to be covered along the y-axis

    element.style.transition = `all ${velocity/1000}s`;
    element.style.zIndex = 1000000000000;

    element.style.top = yDistance+"px";
    element.style.left = xDistance+"px";

    // If the callback is not a function, then throw an error
    if(typeof callback === 'function'){
        callback();
    }
    else{
        throw new TypeError("Failed to execute 'move': Callback must be of type function");
    }
}


export { hide, show, blink, move }

// Tasks
/*
1. Split animation
2. Fade animation => Up, Down, Left, Right
*/