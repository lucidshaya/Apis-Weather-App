// fetch('https://dummyjson.com/products/1', {})
// .then(response => console.log(response))
// .catch(error => console.log(error));


// fetching and adding new products
/*
fetch('https://dummyjson.com/products/add', {
    method: 'POST', 
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        title: 'iphone 19',
        description: 'changed to a better phone',
        price : '1000',
        rating: '9/10'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

*/


// Define an asynchronous function to get all products
const getAllProducts = async () => {

    try {
        // Await the fetch call to get data from the API endpoint
        const response = await fetch('https://dummyjson.com/products/');
       
        // Await the conversion of the response to JSON format
        const json = await response.json();
        
        // Log the JSON data to the console
        console.log(json);
    } catch (error) {
        // Log any errors that occur during the fetch or JSON conversion
        console.log(error);
    }
}

// Call the function to execute the code
getAllProducts();