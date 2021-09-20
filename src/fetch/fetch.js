// Function: Fetches the data and returns it
async function getData(url, responseType="json", catchCallback=(error)=>error.message, finallyCallback=()=>{}, thenCallbacks){
    let response = await fetch(url); 

    switch(responseType){
        case "blob":
            responseData = response.blob();
            break;
        case "clone":
            responseData = response.clone();
            break;
        case "formData":
            responseData = response.formData();
            break;
        case "json":
            responseData = response.json();
            break;
        case "text":
            responseData = response.text();
            break;
        default:
            throw new TypeError("Failed to execute 'getData': Invalid response type")
            break;
    }
    responseData.then(thenCallbacks).catch(catchCallback).finally(finallyCallback);
}

export { getData }