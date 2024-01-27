var container = Array.from(document.getElementsByClassName("container"));
container.forEach((val)=>{
    console.log(val.getBoundingClientRect());
})

container.forEach((val) => {
    let valchild = val.childNodes ; 
    val.addEventListener("mousemove" , function(e){
        valchild[3].style.left = e.x - val.getBoundingClientRect().x + "px";
        valchild[3].style.top = e.y - val.getBoundingClientRect().y+ "px";
    })
    val.addEventListener("mouseenter" , function(){
        valchild[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave" , function(){
        valchild[3].style.opacity = 0;
    })
});
















































// var con1 = document.querySelector("#container1");
// var imgcon1 = document.querySelector("#container1 img");

// con1.addEventListener("mousemove",function(e){
//     imgcon1.style.left = e.x + "px";
//     imgcon1.style.top = e.y + "px";
// })

// con1.addEventListener("mouseenter",function(e){
//     imgcon1.style.opacity = 1;
// })
// con1.addEventListener("mouseleave",function(e){
//     imgcon1.style.opacity = 0;
// })







// var con2 = document.querySelector("#container2");
// var imgcon2 = document.querySelector("#container2 img");

// con2.addEventListener("mousemove",function(e){
//     imgcon2.style.left = e.x - con2.getBoundingClientRect().left + "px";
//     imgcon2.style.top = e.y - con2.getBoundingClientRect().top + "px";
// })

// con2.addEventListener("mouseenter",function(e){
//     imgcon2.style.opacity = 1;
// })
// con2.addEventListener("mouseleave",function(e){
//     imgcon2.style.opacity = 0;
// })







// var con3 = document.querySelector("#container3");
// var imgcon3 = document.querySelector("#container3 img");

// con3.addEventListener("mousemove",function(e){
//     imgcon3.style.left = e.x - con3.getBoundingClientRect().left + "px";
//     imgcon3.style.top = e.y - con3.getBoundingClientRect().top + "px";
// })

// con3.addEventListener("mouseenter",function(e){
//     imgcon3.style.opacity = 1;
// })
// con3.addEventListener("mouseleave",function(e){
//     imgcon3.style.opacity = 0;
// })







// var con4 = document.querySelector("#container4");
// var imgcon4 = document.querySelector("#container4 img");

// con4.addEventListener("mousemove",function(e){
//     imgcon4.style.left = e.x - con4.getBoundingClientRect().left + "px";
//     imgcon4.style.top = e.y - con4.getBoundingClientRect().top + "px";
// })

// con4.addEventListener("mouseenter",function(e){
//     imgcon4.style.opacity = 1;
// })
// con4.addEventListener("mouseleave",function(e){
//     imgcon4.style.opacity = 0;
// })