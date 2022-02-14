var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var eventosRouter = require('./routes/eventos')
var loginRouter = require('./routes/login')
var compraRouter = require('./routes/compraEfetuada')
var carrinhoRouter = require('./routes/carrinho')
var homeRouter = require('./routes/home')
var ingressosRouter = require('./routes/ingressos')
var cadastroRouter = require('./routes/cadastro')
var ajudaRouter = require('./routes/ajuda')
var perfilRouter = require('./routes/perfil')
var show01Router = require('./routes/show01')
var show02Router = require('./routes/show02')
var show03Router = require('./routes/show03')
var show04Router = require('./routes/show04')
var show05Router = require('./routes/show05')
var show06Router = require('./routes/show06')


var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/eventos', eventosRouter)
app.use('/login', loginRouter)
app.use('/compraEfetuada', compraRouter)
app.use('/carrinho', carrinhoRouter)
app.use('/home', homeRouter)
app.use('/ingressos', ingressosRouter)
app.use('/cadastro', cadastroRouter)
app.use('/ajuda', ajudaRouter)
app.use('/perfil', perfilRouter)
app.use('/show01',show01Router)
app.use('/show02',show02Router)
app.use('/show03',show03Router)
app.use('/show04',show04Router)
app.use('/show05',show05Router)
app.use('/show06',show06Router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
