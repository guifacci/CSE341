exports.getLoginPage = (request, response, next) => {
    //const isLoggedIn = request.get('Cookie').split(';')[0].trim().split('=')[1] === 'true';
    //console.log(request.session.isLoggedIn);
    response.render('login', {path: '/login', isAuthenticated: false});
    
}

exports.postAdminPage = (request, response, next) => {
    //response.setHeader('Set-Cookie', 'loggedIn=true');
    
    request.session.isLoggedIn = true;
    
    response.redirect('/');
}