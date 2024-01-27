var img = document.querySelector('img');
var hrt = document.getElementById('hrt');

img.addEventListener('dblclick',function(){
    hrt.style.transform = 'translate(-50% , -50%) scale(1)';
    hrt.style.opacity = 0.8;
    setTimeout(function(){
        hrt.style.transform = 'translate(-50% , -50%) scale(0)';
        hrt.style.opacity = 0;
    },1200);

})