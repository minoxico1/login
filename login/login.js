lgn = "rick"
pwd = "1234"

function login(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == lgn & senha == pwd){
        alert('login correto')
    } else {
        alert('login incorreto')
    }

}