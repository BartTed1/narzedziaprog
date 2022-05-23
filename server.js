const http = require('http');
const url = require('url');

const {port} = require('./config.json');
let data = require('./data.json');
const {search} = require('./search');

const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query.q;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    
    if(query)res.end(JSON.stringify(search(query, data)));
    else res.end('{"error":"nie podano zapytania (paramet q wysłany metodą get)"}');
});
  
server.listen(process.env.PORT || port, () => {console.log(`listen port ${process.env.PORT || port}`);});