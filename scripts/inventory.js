let arr=JSON.parse(localStorage.getItem("products")) || [];

// for(var i=0;i<arr.length;i++){
arr.forEach(function(el,i){


    let z=document.querySelector("#all_products")
    let a=document.createElement("h2");
    let b=document.createElement("p");
    let c=document.createElement("p");
    let d=document.createElement("img");
     let btn=document.createElement("button");
    let e=document.createElement("div");

    a.innerText=el.type;
 b.innerText=el.desc;
c.innerText=el.price;
d.setAttribute("src",el.image)

btn.innerText="Remove Product";
btn.setAttribute("id","remove_product")
btn.addEventListener("click",function(){
    // let stk=JSON.parse(localStorage.getItem("trash")) || [];
    // localStorage.setItem("trash",this)
    this.parentElement.remove();
    // localStorage.removeItem(el)

    let trash=JSON.parse(localStorage.getItem("trash")) || [];


    localStorage.setItem("trash",JSON.stringify(arr[i]))


    arr.splice(i,1);
    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()
    // localStorage("")
    // this.parentNode.delete()
    
})
btn.setAttribute("id","remove_product")
    e.append(d,a,b,c,btn)

    z.append(e)
})