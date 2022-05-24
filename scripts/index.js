//store the products array in localstorage as "products"

// let a=document.getElementById("add_product")

// a.addEventListener("submit",function(){
//  event.preventDefault()
//     alert(4)
//     console.log("dfg2")
// });

function fun(){
 let o={
 type:document.getElementById("type").value,
 desc:document.getElementById("desc").value,
 price:document.getElementById("price").value,
 image:document.getElementById("image").value,
 }
let arr=JSON.parse(localStorage.getItem("products")) || [];

arr.push(o)
localStorage.setItem("products",JSON.stringify(arr))

}