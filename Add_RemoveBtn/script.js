var istatus = document.querySelector('h4');
var arbtn = document.getElementById('arbtn');
var check = 0;

arbtn.addEventListener('click',function (){
    if(check == 0){
        istatus.style.color = 'rgb(26, 206, 26)';
        istatus.innerHTML = 'Friend';
        arbtn.innerHTML = 'Remove';
        arbtn.style.backgroundColor = 'red';
        check = 1; 
    }
    else if(check == 1){
        istatus.style.color = 'red';
        istatus.innerHTML = 'Stranger';
        arbtn.innerHTML = 'Add Friend';
        arbtn.style.backgroundColor = 'rgb(26, 206, 26)';
        check = 0; 

    }
})