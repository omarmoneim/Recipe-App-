//& AJAX Technique 
/**
 * 1) we will take instance from object (like:)
 * ? let myHttp = new XmlHttpRequest();
 * 2) establish connection (like:)
 * ?myHttp.open("    API METHOD (GET== GET DATA FROM BACKEND )|| (POST == SEND DATA TO BACKEND)|| (PUT==  UPDATE DATA FROM API (BACKEND) )|| (DELETE== DELETE THE API  )|| (PATCH==UPDATE PART OF DATA IN API)     ","      API URL       ");
 * 3)send request to api (like)
 * ?myHttp.send()
 * 
 * !Step 1,2,3 will take time and js doesn't wait so it will output the response without data so the solution is in 
 * ~~ 4) addEventListener 
 * 
 * 
 * ~~ MyHttp.addEventListener("load (includes the AJAX STATUES ) or (readyStateChange -->> Deprecated (DOESN'T includE  the AJAX STATUES))"   ,   function(){
 * ~     
 * ~ 5)   myHttp.response
 * ~    
 * ~     })
 * && Note {
 * &&     myHttp.readyState ==> AJAX statues ( 0 (request not initialized) ,  1 (server connection established) , 2(request received)  , 3(processing request) , 4(request finished and response is ready) ) /  myHttp.States ==> response statues (200 OK , 403 forbidden , 404 Page Not Found  )      }
 * 
 */





//! ????????????????????????the Api practicing ??????????????????????????
mealData('pizza');

function mealData(meal){
let myHttp =new XMLHttpRequest();
myHttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
myHttp.send();
myHttp.responseType="json";

myHttp.addEventListener("load", function(){
let theResponse = myHttp.response.recipes;
displayData(theResponse);

}
)

myHttp.addEventListener("error", function(){
console.log("Error!!!!!!!!!!!!!!!!!!!!")
}
)
}


function displayData(arr) {
let contain =''

 for(let i =0 ; i< 3 ; i++){
    contain +=`
      <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="inner border border-white border-3 p-2 text-white ">
                       <img src="${arr[i].image_url}" alt="" class="w-100">
                       <h3 >${(arr[i].title).split(" " ,2 ).join(' ')}</h3>
                    </div>
                </div>
    `
 }
 document.getElementById("ourMeals").innerHTML=contain;
    
}

document.querySelector("#myInput").addEventListener("input",function(){
let word = document.querySelector("#myInput").value;
mealData(word)
})



//& AJAX Technique 


// let myHttp = new XMLHttpRequest();
// myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`)
// myHttp.send();
// myHttp.responseType="json";
// let meals = []; 

// myHttp.addEventListener("load", function(){
//    if(myHttp.status>=200 && myHttp.status<300){
//          meals= myHttp.response.recipes
//          console.log(meals)
//    }
   
// })
// myHttp.addEventListener("error", function(){

//          meals= myHttp.response

// })


// function displayData(){
// }





//    let contain = document.createElement("div");
//    contain.setAttribute('class','col-md-3');
//    document.getElementById("ourMeals").append(contain)

//      console.log(contain);
   



//      let inner= document.createElement("div")
//      inner.setAttribute('class', ' inner p-2 text-white border border-white border-3'  )
//      document.querySelector('.col-md-3').append(inner)
    
// console.log(inner);

// let ourImg =document.createElement("img");
// ourImg.setAttribute("class","w-100 ")
// ourImg.setAttribute("src","../imgs/1.jpg ")
// document.querySelector(".inner").append(ourImg)
   

// let paragraph=document.createElement("h3");
// paragraph.textContent='Hello Data'
// document.querySelector(".inner").append(paragraph)






