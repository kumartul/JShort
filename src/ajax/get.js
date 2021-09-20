// Function: Handles AJAX get operations
function get(obj){
    // If the argument is not an object, then throw an error
    if(typeof obj === 'object'){
        const xhr = new XMLHttpRequest();
        
        xhr.open("GET", obj.url, true);
        xhr.onprogress = obj.loading;

        xhr.onload = function(){

            // If the status is OK, then call the loaded function passed by the programmer
            if(xhr.readyState === 4 && xhr.status == 200){
                
                // Pass the arguments according to the response type
                // If the response type is invalid, then throw an error
                if(!obj.responseType){
                    obj.loaded(xhr.response);
                }
                else if(obj.responseType.toLowerCase() === "text"){
                    obj.loaded(xhr.responseText);
                }
                else if(obj.responseType.toLowerCase() === "xml"){
                    obj.loaded(xhr.responseXML);
                }
                else{
                    throw new Error("Failed to execute 'get': Invalid response type")
                }
            }
        }
        xhr.send();
    }
    else{
        throw new Error("Failed to execute 'get': The argument must be an object");
    }
}

export { get }