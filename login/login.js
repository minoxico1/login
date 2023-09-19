lgn = "CaçaRato"
pwd = "diabo666"

function login(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == lgn & senha == pwd){
        alert('YEEEEY')
    } else {
        alert('Tá errado bro')
    }

}