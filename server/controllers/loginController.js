//inport login model
// const jwt = require('jsonwebtoken')
const getlogin = (req, res) => {
  res.render('login/login',{title:'Login',titlehref:'/login'})
}

role =['admin','all','gateman','arwaSampling','todaysInOut','arwaMilling','usnaSampling','usnaMilling','sampling','milling']

users = [{
  userName: "nk",
  password: "123",
  sessionid: "12347",
},{
  userName: "ramesh",
  password: "123",
  sessionid: "12346",

}]


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
    res.cookie('sessionid', loginUser.sessionid,{maxAge:365*60*60*1000,httpOnly:true})
    console.log('logged in cookie set redirection home');
    res.redirect('/')
    
  } else {
    console.log('login failed');
    res.clearCookie("sessionid");
    res.redirect('/login')
  }
}


const authenticateUser = (req, res, next) => {
 
  console.log('authenticating.....')
  var sessionid = req.cookies.sessionid;
  let userfound = false
  
  users.forEach(user => {if(sessionid === user.sessionid)userfound = true})
  console.log(userfound);
  if (!userfound){res.redirect('/login')}else{next()}
}

const logout = (req, res) => {
  res.clearCookie("sessionid");
  res.redirect('/login')
}

module.exports = {
  getlogin,
  loginpost,
  authenticateUser,
  logout
}