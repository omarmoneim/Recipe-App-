//?                            Fetch ===> Method modified in ES6 

//^ implement AJAX technique inside it  
// ^^  return  promise by default 
//  ^^^  there is an object inside it to check the statues 
//    ^^^^  by default fetch is implementing GET method  if u want to change the method ({method:POST or etc })  


//&&&&&&&&&&&&&&&&&&&&&&&&&               EXAMPLE   1          &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



// async function pizza(){
//    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
//       if (response.ok){
//            let data = await response.json()
//              console.log("pizza",data.recipes);

//    }
   

// }



//  async function pasta (){
//  let response =    await fetch(`https://forkify-api.herokuapp.com/api/search?q=pasta`) ;
// //  console.log(response);
 
//  if (response.ok){
//     console.log("pasta" ,   await response.json()
//  )
//  }

// }


// async function corn (){

//   let response =   await fetch(`https://forkify-api.herokuapp.com/api/search?q=corn`)
//   if(response.ok){
//     console.log(
//         "corn", 
//            await response.json()

//     );
    
//   }
// }

// function helloApi(){
//     console.log("hello API");
    
// }


// (
//    async function(){
//         await   corn()
//         await   pizza()
//         await   pasta()
//         helloApi()

//     }
// )()


//! - -------------------------------------------------- Example 2 ----------------------------
const searchData= document.querySelector("#myInput")
 const showDetails = document.getElementById("ourDetails");

async function getRecipes(meal="pasta"){
  try {    //!! try here is checking on the code if the code is holding something wrong catch will run 
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
      if (response.ok ){
       let data = await response.json();
       console.log(data)
        let mealsRecipes= data.recipes
         displayData(mealsRecipes);
   }
   else{
      console.log("Error input !!!!!!!!!!!!!!11")
   }
   
  } catch (error) {
   console.log("ERROR")
  }
}
getRecipes()

function displayData(arr){
    let container= '';
    for (let i = 0 ; i < arr.length ; i++){
        container+=`
        <div class=" col-6 col-md-4 col-lg-3">
                    <div class="inner border border-white border-3 p-2 text-white ">
                       <img src="${arr[i].image_url}" alt="" class="w-100 ">
                       <h3 class="text-center p-3 text-truncate" >${(arr[i].title).split(" " ,2).join(' ')}</h3>
                       <button onclick="showModal(${arr[i].recipe_id})" type="submit" class="w-100 btn btn-danger text-dark mb-3" id="showDetails" data-bs-toggle="modal" data-bs-target="#exampleModal" >Show Details</button>
                    </div>
                </div>
        
        `
    } 
    document.getElementById('ourMeals').innerHTML=container;
}



searchData.addEventListener("input", function(){
   let searchWord = searchData.value;
   getRecipes(searchWord)
})


async function showModal(id){
   let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
   if(response.ok){
    let DetailsMeal = await response.json();


    //  console.log(DetailsMeal.recipe) 
    //  console.log(DetailsMeal.recipe.image_url) 
    //  console.log(DetailsMeal.recipe.title) 


     document.getElementById("mealDescription").innerHTML=`
     
      
        <img src="${DetailsMeal.recipe.image_url}" class=" w-100 " alt="">
        <p class="text-danger h4">${DetailsMeal.recipe.title}</p>
     `
   
   }
}




//? -------------------------------------------OOP-----------------------------------------



// let human={
//    name:"human",
//    age:25
// }

// let user={
//    workAt:'e-nozom',
//    salary:30000
// }
// let man = {
//    liveIn:"England",
//    Nationality:"Egyptian"
// }


// //? first way to inherit 
// user.__proto=human;
// man.__proto = user;
// console.log(man);


//????? second  way to inherit 

//  Object.setPrototypeOf(user,human);
// let finalUser= Object.setPrototypeOf(man,user);
// console.log(finalUser);
// console.log(Object.getPrototypeOf(user))// بيرجع اللي انت وارث منه ) أنت وارث ايه ؟






//!   String / Number / Boolean / Object ==> Constructor Functions  ===> [[prototype]] 
//  let str= new String ("t");
// console.log(str);



function s(){
   console.log("hello")
};
s.value=56;

console.log(s.value)

s()


//                           ! closure 
function outer(){
   let count = 0 ; 



   // &   "Functions remember the environment where they were born."
   function inner(){
      count++;
      console.log(count);
      
   }

   
   return inner
}

let result =outer();
result()
result()
result()
result()
result()
result()
result()
result()
result()