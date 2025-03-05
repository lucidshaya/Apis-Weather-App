// Define an asynchronous function to load a joke
const LoadJoke = async () => {
    try {
        // Fetch a random joke from the Chuck Norris API
        const chunkJokes = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json" // Specify that we want JSON response
            }
        });
        console.log(chunkJokes);
        
        // Parse the JSON response
        const jokeData = await chunkJokes.json();
        
        // Update the HTML element with id 'joke' to display the joke
        document.getElementById('joke').innerHTML = jokeData.value;
    }
    catch(error) {
        // Log any errors that occur during the fetch or JSON parsing
        console.log(error);
    }
}

// Add an event listener to the button with id 'jokeBtn'
// When the button is clicked, the LoadJoke function is called
document.getElementById('jokeBtn').addEventListener("click", LoadJoke);

