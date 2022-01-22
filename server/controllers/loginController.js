//inport login model
// const jwt = require('jsonwebtoken')


users = [{
  userName: "nk",
  password: "123"
}]

const getlogin = (req, res) => {
  res.send(`
  <h1>Log In</h1>
  <form action="/login" method="post" autocomplete="off">
  Username :<br>
  <input type='text' name="userName"><br>
  Password :<br> 
  <input type='password' name="password"><br>
  <input type='submit' value="submit">
  </form>
  `)
}
const loginpost = (req, res) => {
  // check user name and pasward with db
  //if true set cookie redirct to home
  //else redirect to login page with error not successfull

  const {
    userName,
    password
  } = req.body
  const loginUser = users.filter(user => user.userName === userName && user.password === password)[0]
  console.log('the username -' + userName + ' and password=' + password + ' and filtered users-' + JSON.stringify(loginUser))


  if (loginUser) {
    // set cookies
    res.cookie('name', loginUser.userName,{maxAge:2*60*60*1000,httpOnly:true})
    console.log('logged in');
    res.redirect('/')
  } else {
    console.log('login failed');
    res.clearCookie("name");
    res.redirect('/login')
  }
}
const authenticateUser = (req, res, next) => {
  //  get res cookie
  // 
  console.log('authenticating.....')

  var username = req.cookies.name;
  if (!username) {
    console.log('failed');
    return res.redirect('/login')
  }
  // return res.send('No cookie found');
  console.log('success');
  console.log('set cookie name to -> ' + username, );
  next()
  //check user in cookie

  // // if false return redirct to login route
  // // else next
}

const logout = (req, res) => {
  res.clearCookie("name");
  res.redirect('/login')
}

module.exports = {
  getlogin,
  loginpost,
  authenticateUser,
  logout
}