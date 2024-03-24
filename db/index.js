require ('dotenv').config();
const conn = require('./db/conn');

conn.authenticate().then(()=>{
    console.log('Conectado ao banco de dadoscom sucesso!');
}).catch((err)=>{
    console.log('Ocorre um erro: ' + err);
});