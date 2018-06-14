const jsonServer = require('json-server')
const _ = require('lodash')
const server = jsonServer.create()
// const customers = jsonServer.router('customers.json')
const middlewares = jsonServer.defaults()

var fs = require('fs');
var users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
console.log(users.userslist)

server.use(middlewares)
server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'GET') {
//     var token = req.headers.auth
//     if(!token) {
//     	res.send(401)
//     }
//   }
//   // Continue to JSON Server router
//   next()
// })

server.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  var tokenvalue=req.body.token;

  console.log("user_name= "+user_name+", password="+password+", token="+tokenvalue);
  var myUser = _.find(users.userslist, function(user) { return user.user ===  user_name})

  if(myUser && myUser.user && myUser.password === password && myUser.token === tokenvalue) {
    res.status(200).jsonp({message:'Login success'})
  } else {
  		res.status(401).jsonp({error:'invalid userid , password and token'})
  }
});
// server.use(customers)
server.listen(3000, () => {
  console.log('JSON Server is running')
})