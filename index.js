const http = require('http');

const listaDeMoedas = require('./moedas.json');

const app = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(listaDeMoedas));

    res.end();
})

app.listen(3000, ()=> console.log('Servidor iniciado em http://localhost:3000/'));