const http = require('http');
const { PassThrough } = require('stream');

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/'){
         
        response.write('<html>');
        response.write('<head><title>Enter Message:  </title><head>');
        response.write('<body><h4>Username</h4></body>');
        response.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type ="submit">Submit</button></form></body>');
    
        response.write('</html>');
        return response.end();
        }
        if(url === '/users'){

            response.write('<html>');
            response.write('<head><title>Enter Message:  </title><head>');
            response.write('<body><ul><li>Guilherme</li>');
            response.write('<li>Brother Lyon</li>');
            response.write('<li>Filipe</li></ul></body>');
            response.write('</html>');
            return response.end();
        }
        if(url === '/create-user' && method === 'POST'){
            const body = [];
            request.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk)
            });
            request.on('end', ()=> {
                const parseBody = Buffer.concat(body);
                var toStringBody = parseBody.toString();
                console.log(toStringBody.split('=')[1]);
                console.log(parseBody);
            });
            
            
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        
        }

           
        
        response.setHeader('Content-type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Prove 01 </title><head>');
        response.write('<body><h1>Prove 01</h1></body>');
        response.write('</html>');
        response.end();
};

module.exports = requestHandler;
    


