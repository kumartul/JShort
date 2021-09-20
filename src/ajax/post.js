// Function: Handles AJAX post operations
function post(obj){
    // If the argument is not an object, then throw an error
    if(typeof obj === 'object'){
        const xhr = new XMLHttpRequest();

        xhr.open("POST", obj.url, true);
        xhr.onprogress = obj.loading();

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
                    throw new Error("Failed to execute 'post': Invalid response type")
                }
            }
        }

        // Set the headers
        xhr.setRequestHeader(obj.headers.name, obj.headers.value);
        xhr.send(obj.data);
    }
    else{
        throw new Error("Failed to execute 'post': The argument must be an object");
    }
}


export { post }