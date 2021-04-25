 const http = require('http');
 const fs = require('fs');
const { PassThrough } = require('stream');

 function requestListener(request, response){

    const method_type = request.method;
    const url = request.url;
    
    if(url === '/'){
         
    response.write('<html>');
    response.write('<head><title>Enter Message:  </title><head>');
    response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type ="submit">Send</button></form></body>');
    response.write('</html>');
    return response.end();
    }
    if(url === '/message' && method_type === 'POST'){
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push()
        });
        request.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString;
            console.log(parseBody);
            const message = parseBody.toString.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        
        
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
    console.log(request.url, request.method, request.headers)
    response.setHeader('Content-type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Prove 01 </title><head>');
    response.write('<body><h1>Prove 01</h1></body>');
    response.write('</html>');
    response.end();
 }

 const server = http.createServer(requestListener);

 server.listen(3000);