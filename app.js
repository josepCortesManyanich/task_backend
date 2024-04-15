const {basedatos} = require('./db/index')
const express = require ('express');
const cors = require ('cors');
const logger = require('morgan'); 
const createError= require('http-errors')

basedatos()

const app = express();
const indexRouter = require('./routes/index')
const taskRouter = require('./routes/task')
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*intro de las rutas*/
app.use('/', indexRouter)
app.use('/app/tarea', taskRouter);


app.use((req, res, next) => {
    next(createError(404));
});

app.listen( 3002,() => {
    console.log('CONECTADO');
});
