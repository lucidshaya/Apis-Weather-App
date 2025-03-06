// Grab all the buttons, inputs, and outputs
const inputSearch = document.getElementById("search-bar-input"); // Input field for city name
const city = document.getElementById("citynamee"); // Element to display city name
const date = document.getElementById("date"); // Element to display current date
const temperature = document.getElementById("temperature"); // Element to display temperature
const description = document.getElementById("description"); // Element to display weather description
const highs = document.getElementById("highs"); // Element to display high temperature
const lows = document.getElementById("lows"); // Element to display low temperature

// Months array for date formatting
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]; // Array of month names for date formatting

// Set current date
const setCurrentDate = () => {
    let dateObj = new Date(); // Create a new Date object
    let month = months[dateObj.getUTCMonth()]; // Get the current month name
    let day = dateObj.getUTCDate(); // Get the current day of the month
    let year = dateObj.getUTCFullYear(); // Get the current year
    date.innerHTML = `${month} ${day}, ${year}`; // Set the date element's inner HTML to the formatted date
};

// Weather fetching function
const getWeather = async () => {
    try {
        const searchValue = inputSearch.value.trim(); // Get the trimmed value from the input field
        if (!searchValue) { // Check if the input is empty
            alert("Please enter a city name"); // Alert the user to enter a city name
            return; // Exit the function
        }

        const apiKey = "cde71c160eb36c80ba8626de66dfd88f"; // API key for weather service
        const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${searchValue}`; // Construct the API URL
        const response = await fetch(url); // Fetch the weather data from the API
        
        if (!response.ok) { // Check if the response is not OK
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error with the response status
        }

        const weatherData = await response.json(); // Parse the response JSON
        
        if (weatherData.error) { // Check if the API returned an error
            throw new Error(weatherData.error.info); // Throw an error with the API error info
        }

        // Update DOM elements with weather data
        city.innerHTML = weatherData.location.name; // Set the city name
        description.innerHTML = weatherData.current.weather_descriptions[0]; // Set the weather description
        temperature.innerHTML = `${weatherData.current.temperature}°C`; // Set the temperature
        highs.innerHTML = `${weatherData.current.temperature}°C`; // Set the high temperature (placeholder)
        lows.innerHTML = `${weatherData.current.temperature}°C`; // Set the low temperature (placeholder)

        console.log(weatherData); // Log the weather data to the console

    } catch (error) { // Catch any errors
        console.error("Error fetching weather:", error); // Log the error to the console
        alert("Failed to fetch weather data. Please check your internet connection and city name."); // Alert the user of the error
    }
};

// Initialize the date when page loads
setCurrentDate(); // Call the function to set the current date

// Add event listener if there's a search button
document.getElementById("search-icon")?.addEventListener("click", getWeather); // Add click event listener to the search button

// Add enter key support for the input
inputSearch.addEventListener("keypress", (e) => { // Add keypress event listener to the input field
    if (e.key === "Enter") { // Check if the pressed key is Enter
        getWeather(); // Call the getWeather function
    }
});