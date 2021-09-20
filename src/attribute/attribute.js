// Function: Deals with the attributes of an element
/*
1. Returns all the attributes of an element, if the arguments are null
2. If attribute is not null, then the corresponding value is returned
*/
function attr(attribute = null, value = null) {
    // If the arugments are null, loop through all the attributes of the element and return it
    // in an array
    if(!attribute && !value) {
        const attributes = this.element.getAttributeNames();
        const attributesArray = [];

        for(let i = 0; i < attributes.length; i++)
        {
            attributesArray[i] = attributes[i];
        }

        return attributes;
    }
    // If the attribute and value are not string, then throw an error
    else if(typeof attribute !== 'string' && typeof value !== 'string') {
        throw new TypeError("Failed to execute: 'attr': The attribute and value must be a string");
    }
    // If an attribute is passed, then return the corresponding value
    else if(attribute && !value) {
        return this.element.getAttribute(attribute);
    }
    else {
        this.element.setAttribute(attribute, value);
        return this;
    }
}

// Function: Checks if a certain attribute is present in an element
function hasAttr(attribute) {
    if(!attribute) {
        // Throw an error if the attribute is a falsy value
        throw new TypeError("Failed to execute: 'hasAttr': Please provide a valid attribute");
    }
    else {
        return this.element.hasAttribute(attribute);
    }
}

// Function: Removes a certain attribute from the element
function removeAttr(attribute) {
    if(!attribute) {
        // Throw an error if the attribute is a falsy value
        throw new TypeError("Failed to execute 'removeAttr': Please provide a valid attribute");
    }
    else {
        if(this.element.hasAttribute(attribute)) {
            this.element.removeAttribute(attribute);
        }
        else {
            // Throw an error if the attribute is not present in the element
            throw new ReferenceError(`Failed to execute 'removeAttr': ${attribute} is not an attribute of ${this.element}`)
        }
    }
}

export { attr, hasAttr, removeAttr }

// Tasks
/*
1. Will not allow a programmer to set the value of an invalid attribute
2. Will add a functionality to pass multiple attribute-value pairs at once
*/