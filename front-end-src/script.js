const form =
document.getElementById(
"loginForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

let email =
document.getElementById(
"email"
).value;

let senha =
document.getElementById(
"senha"
).value;

let mensagem =
document.getElementById(
"mensagem"
);

if(
email==="professor@unialfa.com"
&&
senha==="1234"
){

mensagem.innerHTML=
"Login realizado";

}
else{

mensagem.innerHTML=
"Credenciais inválidas";

}

});
