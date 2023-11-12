const express = require('express')
const connection = require('./db/connection')
const User = require('./models/user')
const app = express()
app.use(express.json())
const port = 4000

connection()
app.post('/register', async (req, res) => {
 const data = await User.create(req.body)
 if(data) res.json({msg :'user registered'})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


