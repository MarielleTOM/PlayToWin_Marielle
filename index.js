require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require('./models/Usuario');
const Jogo = require('./models/Jogo');

const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(express.json());

app.get("usuario/novo", (req,res)=>{
    res.sendFile(`${__dirname}/views/formUsuario.html`)
});

app.post("/usuario/novo", async (req,res)=>{
    const nickname = req.body.nickname;
    const nome = req.body.nome;

    const dadosUsuario={
        nickname,
        nome,
    };

    const usuario = await Usuario.create(dadosUsuario);

    res.send('Usuário inserido sob o id' + usuario.id);
});


app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(express.json());

app.get("usuario/novo", (req,res)=>{
    res.sendFile(`${__dirname}/views/formUsuario.html`)
});


app.post("/jogo/novo", async (req,res)=>{
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const precoBase = req.body.precoBase

    const dadosUsuario={
        titulo,
        descricao,
        precoBase,
    };

    const jogo = await Jogo.create(dadosJogo);

    res.send('Jogo inserido sob o id' + jogo.id);
});

app.listen(8000 ,() =>{
    console.log("Server rodando na porta 8000!")
})

conn.sync().then(()=>{
    console.log('Conectado ao banco de dados com sucesso!');
}).catch((err)=>{
    console.log('Ocorre um erro: ' + err);
});