
const mongoose = require('mongoose');
const Task = require('../models/Task');

const tasks =[
    {name:"Lavadora",prioridad:10, fecha:"12-04-2024", description:'Poner ropa blanca',propiedad:'Raquel'},
    {name:"Limpiar baño",prioridad:10, fecha:"12-04-2024", description:'Repasar las superficies del baño',propiedad:'Josep'},
    {name:"Mirar buzón",prioridad:10, fecha:"12-04-2024", description:'Ha de llegar mi tarjeta de credito',propiedad:'Josep'},
    {name:"Pasar la mopa ",prioridad:10, fecha:"12-04-2024", description:'Pasar la mopa por el comedor, luego de barrer',propiedad:'Josep'}
]



mongoose.connect("mongodb://localhost:27017/TASKDB")
 
  .then(() => {
    return Task.create(tasks)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })