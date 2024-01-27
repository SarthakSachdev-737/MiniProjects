// const a = new Date();
// let d = a.getDate();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// console.log(d, h, m, s);
// hours.innerHTML = h;
// minutes.innerHTML = m;
// seconds.innerHTML = s;

// let incs=(xs)=>{
//     xs+=1;
//     seconds.innerHTML = xs;
//     s=xs;
// }
// let incm=(xm)=>{
//     xm+=1;
//     minutes.innerHTML = xm;
//     m=xm;
// }
// let inch=(xh)=>{
//     xh+=1;
//     hours.innerHTML = xh;
//     h=xh;
// }

// let st = setInterval(incs,1000,s)
// let mt = setInterval(incm,60000,m)
// let ht = setInterval(inch,3600000,h)


function CheckTime(x){
    let st;
    if(x<10){
         st='0'+x;
    }
    else{
        st=x;
    }
    return st;
}

let UpdateClock = () => {
    const a = new Date();
    let d = a.getDate();
    let h = CheckTime(a.getHours());
    let m = CheckTime(a.getMinutes());
    let s = CheckTime(a.getSeconds());
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}    
    setInterval(UpdateClock, 1000);
