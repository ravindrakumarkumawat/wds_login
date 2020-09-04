const express = require('express');
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')

const initializePassword = require('./passport.config')
initializePassword(
  passport, 
  email => users.find(user => user.email = email)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
  res.render('index.ejs', {name: 'Ravindra'})
})

app.get('/login', (req, res) =>{
  res.render('login.ejs')
})

app.post('/login', (req, res) =>{
  
})

app.get('/register', (req, res) =>{
  res.render('register.ejs')
})

app.post('/register', async(req, res) =>{
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    res.redirect('/login')
  } catch (error) {
    res.redirect('/register')
  }
  console.log(users)
})


app.listen(5000)