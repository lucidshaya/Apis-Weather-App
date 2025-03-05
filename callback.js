// Promise 

const promise = new Promise((resolve, reject) => {

     const randomNumber = Math.floor(Math.random() * 10 );

    setTimeout(() => {
        if(randomNumber < 8) {
            resolve("hurray")         
        } else{
            reject("failed")         
        }
    })
});




promise
.then((value) => { 
    console.log(value);
    
}).catch((error) => {
    console.log(error);
})