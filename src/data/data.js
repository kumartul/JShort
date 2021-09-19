// Function: Adds the data attribute to the element
function data(keyValueObj=null){
    if(typeof keyValueObj !== 'object'){
        throw new Error("Failed to execute 'data': The argument must be a valid object");
    }
    else{
        if(keyValueObj === null){
            return this.element.dataset;
        }
        else{
            const keys = Object.keys(keyValueObj);
            for(let i = 0; i < keys.length; i++){
                this.element.setAttribute(`data-${keys[i]}`, keyValueObj[keys[i]]);
            }
        }
    }
}

export { data }