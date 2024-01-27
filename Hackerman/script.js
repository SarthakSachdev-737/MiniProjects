let a = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('ini').innerHTML= `Hack Program Initialised....`
            resolve('a');
        },1000)
    })
}
let b = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('PH').innerHTML= `Trying to Hack ${uname} Phone....`
            resolve('b');
        },1000)
    })
}
let c = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('PL').innerHTML= `Trying to breach Phone's lock....`
            resolve('c');
        },1000)
    })
}
let d = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AG').innerHTML= `Access Granted....`
            resolve('d');
        },1500)
    })
}
let e = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AIC').innerHTML= `Accessing Contacts....`
            resolve('e');
        },1000)
    })
}
let f = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('CA').innerHTML= `Contacts Accessed.`
            resolve('f');
        },2000)
    })
}
let g = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AIP').innerHTML= `Accessing Photos....`
            resolve('g');
        },1000)
    })
}
let h = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('PA').innerHTML= `Photos Accessed.`
            resolve('h');
        },2000)
    })
}
let i = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AGA').innerHTML= `Accessing Google Account....`
            resolve('i');
        },1000)
    })
}
let j = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('GAA').innerHTML= `Google Account Accessed.`
            resolve('j');
        },2000)
    })
}
let k = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AIFBP').innerHTML= `Accessing Facebook Password....`
            resolve('k');
        },1000)
    })
}
let l= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('FBPA').innerHTML= `Facebook Password Accessed.`
            resolve('l');
        },1000)
    })
}
let m = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AIIID').innerHTML= `Accessing Instagram Id....`
            resolve('m');
        },1000)
    })
}
let n = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('IIDA').innerHTML= `Instagram Id Accessed.`
            resolve('n');
        },1000)
    })
}
let o = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('AISAWM').innerHTML= `Accessing SMS and Whatsapp messages....`
            resolve('o');
        },1000)
    })
}
let p = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('SAWMA').innerHTML= `SMS and Whatsapp messages Accessed.`
            resolve('p');
        },2500)
    })
}
let q = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('ACAM').innerHTML= `Accessing Camera and microphone....`
            resolve('q');
        },1000)
    })
}
let r = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('CAMA').innerHTML= `Camera and microphone Accessed.`
            resolve('r');
        },1000)
    })
}
let s = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('GFC').innerHTML= `Gaining full control of the Device....`
            resolve('s');
        },1000)
    })
}
let t = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('FCG').innerHTML= `Full control gained.`
            resolve('t');
        },2000)
    })
}
let u = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('Alert').innerHTML= `Alert!!`
        },1500)
        resolve('u');
    })
}
let v = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById('DH').innerHTML= `Device Hacked.`
        },1500)
        resolve('v');
    })
}
 
let callingf = async()=>{
    let A= await a();
    console.log(A);
    let B= await b();
    console.log(B);
    let C= await c();
    console.log(C);
    let D= await d();
    console.log(D);
    let E= await e();
    console.log(E);
    let F= await f();
    console.log(F);
    let G= await g();
    console.log(G);
    let H= await h();
    console.log(H);
    let I= await i();
    console.log(I);
    let J= await j();
    console.log(J);
    let K= await k();
    console.log(K);
    let L= await l();
    console.log(L);
    let M= await m();
    console.log(M);
    let N= await n();
    console.log(N);
    let O= await o();
    console.log(O);
    let P= await p();
    console.log(P);
    let Q= await q();
    console.log(Q);
    let R= await r();
    console.log(R);
    let S= await s();
    console.log(S);
    let T= await t();
    console.log(T);
    let U= await u();
    console.log(U);
    let V= await v();
    console.log(V);

}

let uname=prompt("enter your name");
callingf();
