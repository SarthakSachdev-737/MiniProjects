var crsr = document.getElementById('crsr');
var body = document.querySelector('body');
body.addEventListener('mousemove',function(e){
    crsr.style.left = e.x + 'px';
    crsr.style.top = e.y + 'px';
}) 