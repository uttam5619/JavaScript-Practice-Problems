const object ={
    message: "Hello, World!",
    logMessage: function (){
        console.log(this.message);
    }
}

setTimeout(object.logMessage, 1000);
setTimeout(object.logMessage(),3000)