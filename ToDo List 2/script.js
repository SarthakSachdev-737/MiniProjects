if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let lk = localStorage.key(i);
        let lv = localStorage.getItem(lk);
        let todorow = document.createElement('div');
        todorow.setAttribute('class', 'todorow');

        let etime = lk;
        let time = document.createElement('div');
        time.setAttribute('class', 'tt');
        time.innerHTML = `${etime}`;
        todorow.appendChild(time);

        let etodo = lv;
        let todo = document.createElement('div');
        todo.innerHTML = `${etodo}`;
        todo.setAttribute('class', 'tt');
        todorow.appendChild(todo);
        let todorowwithhr = document.createElement('div');
        todorowwithhr.setAttribute('class', 'todorowwithhr');

        let hr = document.createElement('hr');

        let delbtn = document.createElement('button');
        delbtn.innerHTML = `Delete`;
        delbtn.setAttribute('class', 'delbtn');
        delbtn.addEventListener('click', () => {
            delbtn.parentElement.remove();
            localStorage.removeItem(etime);
        });

        todorowwithhr.appendChild(todorow);
        todorowwithhr.appendChild(delbtn);
        todorowwithhr.appendChild(hr);

        let todolist = document.getElementsByClassName('todolist')[0];
        todolist.appendChild(todorowwithhr);

    }
}

let userinput = () => {
    let todorow = document.createElement('div');
    todorow.setAttribute('class', 'todorow');

    let etime = document.getElementsByClassName('entertime')[0].value;
    let time = document.createElement('div');
    time.setAttribute('class', 'tt');
    time.innerHTML = `${etime}`;
    todorow.appendChild(time);

    let etodo = document.getElementsByClassName('entertodo')[0].value;
    let todo = document.createElement('div');
    todo.innerHTML = `${etodo}`;
    todo.setAttribute('class', 'tt');
    todorow.appendChild(todo);

    let todorowwithhr = document.createElement('div');
    todorowwithhr.setAttribute('class', 'todorowwithhr');

    let hr = document.createElement('hr');

    let delbtn = document.createElement('button');
    delbtn.innerHTML = `Delete`;
    delbtn.setAttribute('class', 'delbtn');
    delbtn.addEventListener('click', () => {
        delbtn.parentElement.remove();
        localStorage.removeItem(etime);
    });

    todorowwithhr.appendChild(todorow);
    todorowwithhr.appendChild(delbtn);
    todorowwithhr.appendChild(hr);

    let todolist = document.getElementsByClassName('todolist')[0];
    todolist.appendChild(todorowwithhr);

    localStorage.setItem(etime, etodo);
    document.getElementsByClassName('entertime')[0].value = '';
    document.getElementsByClassName('entertodo')[0].value = '';

}

// let creationoftodos=(first,second)=>{

// }


let addbutton = document.getElementsByClassName('efbutton')[0];
addbutton.addEventListener('click', userinput);

// let emptytodo = () => {
//     let plus = document.createElement('div');
//     plus.innerHTML='ADD';
//     let plustext = document.createElement('div');
//     plustext.innerHTML='Add Your ToDos';
//     plus.setAttribute('class', 'material-symbols-outlined');
//     plustext.setAttribute('class','plustext');
//     document.getElementsByClassName('todolist')[0].appendChild(plus);
//     document.getElementsByClassName('todolist')[0].appendChild(plustext);
// }

// if (document.getElementsByClassName('todolist')[0].hasChildNodes() == false) {
//     emptytodo();
// }
// else if{
//     document.getElementsByClassName('material-symbols-outlined')[0].remove();
//     document.getElementsByClassName('plustext')[0].remove();
// }
