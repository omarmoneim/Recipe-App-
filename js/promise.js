//^ What is promise (ES6) ? 
/**
 * * promise is an object (container for async code that i want to control it ).
 * * promise was created to SOLVE  CallBack's problems .
 * 
 * 
 * 
 * & there is two statues in promise
 * ?   pending  (implement code during pending)
 * 
 * *       ** settled ===> fulfilled  (success/ resolved ) 
 * !                  ===>  failed    (Rejected)
 * 
 * 
 * ~ Two steps to create promise 
 *    ^ Build Promise 
 *      ^^ consume promise (implement promise)
 * 
 * 
 * 
 * 
 *     !! Disadvantage of Promise 
 *           ! 1- then chaining  ($$ to solve this problem we will use Async/Await concept )
 */



// **Example 1 



// let myPromise = new Promise( function ( resolved , rejected ){
//     //! Async code 

//     console.log(" Async code ")

//     //^ simulate error
    
//     let err = false ; 
//     if(err==false){
//       resolved()
//     }
//     else{
//       rejected()
//     }

// });



// function success(){
//     console.log("success")
// };


// function fail(){
//     console.log("fail")
// };


// myPromise.then(success).catch(fail)  /* note  Browser runs the ASYNC code inside PROMISE first   */


//* Example 2  

//!                        pizza

function pizza(){
  return new Promise (function(resolve, reject){
  let myHttp =new XMLHttpRequest();
  myHttp.open("GET" , `https://forkify-api.herokuapp.com/api/search?q=pizza`)
  myHttp.send();
  myHttp.responseType="json";


  myHttp.addEventListener("load",function(){
    let response = myHttp.response
    console.log("pizza",response);
    resolve()
  })

  myHttp.addEventListener("error", function(){
    reject("error Pizza")
  })


    
  })
 
}


























//?                       pasta 
function pasta(){
return new Promise(function(resolve , reject){
 
 
 let myHttp =new XMLHttpRequest();
myHttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=pasta`);
myHttp.send();
myHttp.responseType="json";

myHttp.addEventListener("load", function(){
let theResponse = myHttp.response;
console.log("pasta",theResponse)
resolve()


}
)

myHttp.addEventListener("error", function(){
reject("Error!!!!!!!!!!!!!!!!!!!! pasta")
}
)
})
}













//^                      corn 
function corn(){
return new Promise(function(resolve , reject){
  let myHttp =new XMLHttpRequest();
myHttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=corn`);
myHttp.send();
myHttp.responseType="json";

myHttp.addEventListener("load", function(){
let theResponse = myHttp.response;
console.log("corn",theResponse)
resolve()


}
)

myHttp.addEventListener("error", function(){
// console.log()
reject("Error!!!!!!!!!!!!!!!!!!!!corn")
}
)
})
}


function error(e){
  console.log(e)
}

// corn().then(pizza).then(pasta).catch(error)   // & DEPRECATED 



/**
 * ~ Async/Await Syntax Sugar instead of then chaining in promise 
 * ~~    Async we cannot use  it  on the top level without function return promise and async function
 * 
 */

// ? ?????? first way to use Async/Await 
// async function getRecipes(){
// await corn();
// await pizza();
//  pasta();
// } 
// getRecipes()


//^ second way to use Async/Await  using self invoked  function 



(async function(){
  await corn();
  await pizza();

   pasta();

})();