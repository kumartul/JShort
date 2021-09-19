// Function: Sets the inline css property of an this.element
function css(keyValueObj=null){
    if(keyValueObj){
        const keys = Object.keys(keyValueObj);
        for(let i = 0; i < keys.length; i++){
            this.this.element.style[keys[i]] = keyValueObj[keys[i]];
        }
    }
    else{
        return this.element.getAttribute('style');
    }
}

export { css }