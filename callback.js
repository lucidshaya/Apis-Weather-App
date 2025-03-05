// Promise for catching errors 

const promiseOne  = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One Resolve')
    }, 2000)
})

const promiseTwo  = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Two Resolve')
    }, 3000)
})

Promise.all([promiseOne, promiseTwo])
.then((data) => console.log(data[0], data[1]))
.catch((error) => console.log(error));
