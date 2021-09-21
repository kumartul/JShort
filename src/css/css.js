// Function: Sets the inline css property of an this.element
function css(keyValueObj=null){
    const keys = Object.keys(keyValueObj);
    if(keyValueObj){
        for(let i = 0; i < keys.length; i++){
            this.element.style[keys[i]] = keyValueObj[keys[i]];
        }
    }
    else{
        return this.element.getAttribute('style');
    }
}

export { css }

// Tasks
/*
1. Will not allow a programmer to add invalid CSS properties
*/