require('./db/index')
const express = require ('express');
const cors = require ('cors');
const logger = require('morgan'); 
const createError= require('http-errors')

const app = express();

const taskRouter = require('./routes/task')
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*intro de las rutas*/

app.use('/app', taskRouter);


app.use((req, res, next) => {
    next(createError(404));
});

app.listen(3002, () => {
    console.log('CONECTADO');
});
