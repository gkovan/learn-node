console.log("Hello to the Promise tutorial");

function doSomeStuff() {
    return new Promise(function (resolve, reject) {
        console.log("Promise started");
        console.log("Promise is doing some important work...");
        console.log("Promise has completed, will resolve shortly");
        resolve("Promise resolved");
        //reject("Error occurred");
    });
}

doSomeStuff().then(
    function(message) {
     console.log("Resolved: ", message);
    },
    function(error) {
     console.log("Rejected: ", error);
    }
   );