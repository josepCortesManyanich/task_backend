const router = require('express').Router()
const Task = require('../models/Task')


/*Get task*/
router.get('/', async(req,res,next) =>{
    try {
        const taskDb= await Task.find({})
        if(taskDb.length === 0){
         console.log('No hay tareas disponibles')
        }else res.status(200).json({ data: taskDb })
        
    } catch (error) {
        console.error(error)
        next(error)
    }
})

/*Create task*/

router.post('/', async(req,res,next) => {
     const {name,prioridad,fecha,description,propiedad} = req.body
    try {
        const newTask = {name,prioridad,fecha,description,propiedad}
        const taskDb = await Task.create(newTask)
        if(taskDb.length === 0){
            console.log('No hay tareas')
        } else res.status(200).json({ data:taskDb })
    } catch (e) {
        console.log(e)
        next(e)
    }
})

/*Update file*/


router.get('/:id', async (req,res,next) => {
    const {id} = req.params
    try {
        const taskDb= await Task.findById(id)
        if (!taskDb) {
            console.log('No hay tarea con este id')
          }  else res.status(200).json({ data:taskDb })
          
    } catch (error) {
        console.error(error)
        next(error)        
    }
});


router.put('/:id',async(req,res,next) => {
    const{id} = req.params
    const {name,prioridad,fecha,description,propiedad} = req.body
    try {
        const task = await Task.findById(id);
        if(!task){
            console.log('No hay tareas')
        } else {
          const updatedTask = await Task.findByIdAndUpdate(id, {name,prioridad,fecha,description,propiedad} , { new: true });
          res.status(202).json({ data: updatedTask })
        }
    } catch (error) {
        console.error(error)
        next(error)
        
    }
})

/*Eliminar tareas*/
router.delete('/:id', async(req,res,next) => {
    const {id} = req.params
    try {
        const task = await Task.findById(id);
        if (!task) {
            console.log('No hay tareas')
        } else {
          const deletedTask = await Task.findByIdAndDelete(id);
          res.status(202).json({ data: deletedTask})
        }
    } catch (error) {
        console.error(error)
        next(error)
        
    }
})



module.exports= router