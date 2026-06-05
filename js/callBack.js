/**
 * ~ What is callBack ?
 * ? its a method that makes us control the call of the function (sync / async)
 * ? we can also send a function as an argument to another function . 
 * 
 * 
 * & advantage of callBack 
 * 1 handle the async operations 
 * 2 provide custom behaviors in the function
 * 3 to maintain separation of concern
 * 
 * ! disadvantage 
 *  hell of callBacks (Pyramids of callBacks)  
 * 
 * 
 * 
 * 
 * 
 */

//^ callBack Ex-1

function one(callBack){
console.log("One");
if(callBack){
callBack()

}

}
function two(callBack){
console.log("Two");
if(callBack){
callBack()

}

}
function three(callBack){
console.log("Three");
if(callBack){
callBack()

}
}




one(function(){
   three(function(){
      two(one)
   })
});





//? callBack Ex-2
function calc(a,b,operation){
   return operation(a,b)
}

function add(x,y){
   return x+y;
}

function multiplication(x,y){
   return x*y;
}


let result1 =  calc(3,4,multiplication);
let result2 =  calc(3,4,add);

console.log("============================================");
console.log(result1);
console.log(result2);
