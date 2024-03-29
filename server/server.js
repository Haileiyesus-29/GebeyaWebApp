require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDb = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')

const {
   handleErrors,
   handleDatabaseError,
} = require('./api/middlewares/handleErrors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(
   cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      exposedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
   })
)

app.use(cookieParser())

app.use('/api/auth', require('./api/routes/auth.route'))
app.use('/api/user', require('./api/routes/user.route'))
app.use('/api/product', require('./api/routes/product.route'))
app.use('/api/wishlist', require('./api/routes/wishList.route'))
app.use('/api/order', require('./api/routes/order.route'))

app.use(handleDatabaseError)
app.use(handleErrors)

connectDb(function () {
   app.listen(PORT, () =>
      console.log(
         chalk.bold.bgBlueBright(`SERVER LISTENING ON PORT ${PORT || ''}📡`)
      )
   )
})
