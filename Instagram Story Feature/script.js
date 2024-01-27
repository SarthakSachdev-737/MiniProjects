var stories = document.querySelector("#stories");
var clutter = "";

var arr = [{ dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D", fsi: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8fDB8fHww" },
{ dp: "https://images.unsplash.com/photo-1599201463146-a2540b76e216?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmxzfGVufDB8fDB8fHww", fsi: "https://images.unsplash.com/photo-1599201463146-a2540b76e216?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdpcmxzfGVufDB8fDB8fHww" },
{ dp: "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdpcmxzfGVufDB8fDB8fHww", fsi: "https://images.unsplash.com/photo-1533618821901-9e69d5f5360e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmxzfGVufDB8fDB8fHww" },
{ dp: "https://images.unsplash.com/photo-1698431126215-756e43ffb849?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", fsi: "https://images.unsplash.com/photo-1698341495465-a3627dbdff48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" },
{ dp: "https://images.unsplash.com/photo-1619982998302-752bc70afcff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGdpcmxzfGVufDB8fDB8fHww", fsi: "https://images.unsplash.com/photo-1516522973472-f009f23bba59?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww" }]

arr.forEach((val,idx)=>{
    clutter += `<div class="story" ">
    <img src=${val.dp} alt="" id=${idx}>
    </div>`
})

stories.innerHTML=clutter;

var fullscreen = document.querySelector("#fullscreen");

stories.addEventListener("click",function(e){
    var gv = arr[e.target.id].fsi;
    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${gv})`;

    setTimeout(function(){
        fullscreen.style.display = "none";
    },2000)
})


