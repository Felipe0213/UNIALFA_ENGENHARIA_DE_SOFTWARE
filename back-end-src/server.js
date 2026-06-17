const express =
require("express");

const app =
express();

app.use(
express.json()
);

let presencas=[];

app.get(
"/",
(req,res)=>{

res.send(
"Sistema funcionando"
);

}
);

app.post(
"/login",
(req,res)=>{

const{
email,
senha
}=req.body;

if(
email==="professor@unialfa.com"
&&
senha==="1234"
){

res.json({

status:true,

mensagem:
"Login autorizado"

});

}

else{

res.json({

status:false,

mensagem:
"Dados incorretos"

});

}

}
);

app.post(
"/presenca",
(req,res)=>{

let registro=
req.body;

presencas.push(
registro
);

res.json({

mensagem:
"Presença registrada"

});

}
);

app.get(
"/presencas",
(req,res)=>{

res.json(
presencas
);

}
);

app.listen(
3000,
()=>{

console.log(
"Servidor iniciado"
);

}
);
