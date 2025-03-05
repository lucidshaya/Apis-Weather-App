// async

const showMessage = (message) => { // Function to display a message
    console.log(message); // Log the message to the console
};

const firstMessage = (callback) => { // Function to show the first message and then call a callback
    setTimeout(() => { // Delay execution by 2 seconds
        showMessage('Hello'); // Show 'Hello' message
        callback(); // Call the callback function
    }, 2000);
};

const secondMessage = () => { // Function to show the second message
    showMessage('world!'); // Show 'world!' message
};

firstMessage(secondMessage); // Call firstMessage and pass secondMessage as the callback


const displayLogs = (logs) => { // Function to display logs
    console.log(logs); // Log the logs to the console
};

const showlogs = (callback) => {
    setTimeout(() => {
      displayLogs('user, 1 , 2 , 3 , 4 , 5')
      callback();
    }, 2000);
}

const showPasswords = (pass) => {
    console.log(pass);
}

showlogs(showPasswords)