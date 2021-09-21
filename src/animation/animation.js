// Function: Hides the element
function hide(duration=0, callback=()=>{}){

    // Throw an error if the duration is not a number
    if(typeof duration !== 'number'){
        throw new TypeError("Failed to execute 'hide': Duration must be a number")
    }
    else{
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

}

// Function: Shows the element
function show(duration=0, callback=()=>{}){

    // Throw an error if the duration is not a number
    if(typeof duration !== 'number'){
        throw new TypeError("Failed to execute 'show': Duration must be a number")
    }
    else{
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
}

// Function: Makes the element blink
function blink(ms=0, callback=()=>{}){

    // Throw an error if milliseconds is not a number
    if(typeof ms !== 'number'){
        throw new TypeError("Failed to execute 'blink': Time must be a number");
    }
    else{
        setTimeout(() => {
            this.element.style.opacity = 0;
            setTimeout(() => {
                this.element.style.opacity = 1;

                // Throw an erro if the callback is not a function
                if(typeof callback !== 'function'){
                    throw new TypeError("Failed to execute 'blink': Callback must be of type function");
                }
                else{
                    callback();
                }
            }, duration);
        }, duration);
    }
}

// Function: Moves the HTMLElement in a particular direction
// Use this function to move HTMLElements with absolute position
function move(velocity=1000, distance={ x: 0, y: 0 }, callback=()=>{}){

    // If the velocity is not a number, then throw an error
    if(typeof velocity !== 'number'){
        throw new TypeError("Failed to execute 'move': Velocity must be a number")
    }
    else{
        
        // If the distance is not an object, then throw an error
        if(typeof distance !== 'object'){
            throw new TypeError("Failed to execute 'move': Distance must be an object");
        }
        else{
            let xPos = this.element.getBoundingClientRect().x;   // Current x position of the element
            let yPos = this.element.getBoundingClientRect().y;   // Current y position of the element
        
            let xDistance = distance.x - xPos;  // Distance to be covered along the x-axis
            let yDistance = distance.y - yPos;  // Distance to be covered along the y-axis
        
            this.element.style.transition = `all ${velocity/1000}s`;
            this.element.style.zIndex = 1000000000000;
        
            this.element.style.top = yDistance+"px";
            this.element.style.left = xDistance+"px";
        
            // If the callback is not a function, then throw an error
            if(typeof callback === 'function'){
                callback();
            }
            else{
                throw new TypeError("Failed to execute 'move': Callback must be of type function");
            }
        }
    }
}

// Function: Plays the grow animation
function grow(velocity=1000, scale={ x: 0, y: 0 }, callback=()=>{}){

    // If the velocity is not a number, then throw an error
    if(typeof velocity !== 'number'){
        throw new TypeError("Failed to execute 'grow': Velocity must be a number")
    }
    else{

        // If the distance is not an object, then throw an error
        if(typeof scale !== 'object'){
            throw new TypeError("Failed to execute 'grow': Distance must be an object");
        }
        else{
            this.element.style.transition = `all ${velocity/1000}s`;
            this.element.style.transform = `scale(${scale.x}, ${scale.y})`;
        
            // If the callback is not a function, then throw an error
            if(typeof callback === 'function'){
                callback();
            }
            else{
                throw new TypeError("Failed to execute 'grow': Callback must be of type function");
            }
        }
    }
}

// Function: Shrinks the HTMLElement
function shrink(velocity=1000, scale={ x: 0, y: 0 }, callback=()=>{}){

    // If the velocity is not a number, then throw an error
    if(typeof velocity !== 'number'){
        throw new TypeError("Failed to execute 'shrink': Velocity must be a number")
    }
    else{

        // If the distance is not an object, then throw an error
        if(typeof scale !== 'object'){
            throw new TypeError("Failed to execute 'shrink': Distance must be an object");
        }
        else{
            this.element.style.transition = `all ${velocity/1000}s`;
            this.element.style.transform = `scale(${1/scale.x}, ${1/scale.y})`;
        
            // If the callback is not a function, then throw an error
            if(typeof callback === 'function'){
                callback();
            }
            else{
                throw new TypeError("Failed to execute 'shrink': Callback must be of type function");
            }
        }
    }
}

// Function: Shrinks and grows the HTMLElement
function shrinkAndGrow(velocity=1000, scale={ x: 0, y: 0 }, callback=()=>{}){

    // If the velocity is not a number, then throw an error
    if(typeof velocity !== 'number'){
        throw new TypeError("Failed to execute 'shrinkAndGrow': Velocity must be a number")
    }
    else{
        // If the distance is not an object, then throw an error
        if(typeof scale !== 'object'){
            throw new TypeError("Failed to execute 'shrinkAndGrow': Distance must be an object");
        }
        else{
            this.element.style.transition = `all ${velocity/1000}s`;
            this.element.style.transform = `scale(${-scale.x}, ${-scale.y})`;
        
            // If the callback is not a function, then throw an error
            if(typeof callback === 'function'){
                callback();
            }
            else{
                throw new TypeError("Failed to execute 'shrinkAndGrow': Callback must be of type function");
            }
        }
    }
}

// Function: Rotates the HTMLElement
function rotate(velocity=1000, degrees=0, callback=()=>{}){

    // Throw an error if the velocity is not a number
    if(typeof velocity !== 'number'){
        throw new TypeError("Failed to execute 'rotate': Velocity must be a number")
    }
    else{
        if(typeof degrees !== 'number'){
            throw new TypeError("Failed to execute 'rotate': Degrees must be a number")
        }
        else{
            this.element.style.transition = `all ${velocity/1000}s`;
            this.element.style.transform = `rotate(${degrees}deg)`;
        
            // If the callback is not a function, then throw an error
            if(typeof callback === 'function'){
                callback();
            }
            else{
                throw new TypeError("Failed to execute 'rotate': Callback must be of type function");
            }
        }
    }
}

export { hide, show, blink, move, grow, shrink, shrinkAndGrow, rotate }

// Tasks
/*
1. Split animation
2. Fade animation => Up, Down, Left, Right
*/