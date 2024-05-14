//Creating a promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})
//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
})
//when our task is completed that is settimeout, resolve will call then() (then our then()function will complete its task) resolve and then has interconnection



//method 2 creating a promise without storing it
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})



//3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})


//4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')  //reject has connection with catch
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username //it is returned to next then function
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))//irrespective of resolve or reject it has always executed


//5 using async and await instead of then and catch
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// ---wrong--
//the difference between using async and await instead of then and catch is (it waits for the task to complete if it is completed then only it moves forward otherwise it gives error there only ,here we gracefully dont handle catch, this is the issue here(i.e async and await)(but sometimes we needed that if database connection is not happended then no need to move forward in that cases it is helpful))
//---wrong---


//The above para is wrong we can use anything i.e async and await (or) then and catch


// async function consumedPromise(){
//     let response=await promiseFive
//     console.log(response)
// }
// consumedPromise(); //from above error=false (means no error then our function will not give any error)
// //if it is true(i.e error=true) then the promise gives us an error so our consumedPromise will serve a error so use try and catch (i.e handle error gracefully)
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



// +++++++++++++++++++++++++++++++++++++
// without creating a promise we can also do like this

//method 1
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')//fetch returns a promise
//         //we get the data in string type so converting it to json
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()



//method 2 using then and catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() //we are returning here instead of printing beacasue it takes time to get the response from fetch - but we are printing in below then beacause if first then is completed the only next then will execute so we wrote the console in next then so that our data will be surely received in next then
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
//we are getting the output of this console log first

//but we wrote all the above promises first but we are getting the just written code 
//we will see this in next video





