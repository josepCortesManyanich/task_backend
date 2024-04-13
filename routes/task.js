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
        next(e)
    }
})



router.post('/', async(req,res,next) => {
     const {name,prioridad,fecha,description,propiedad} = req.body
    try {
        const newTask = {name,prioridad,fecha,description,propiedad}
        const taskDb = await Task.create(newTask)
        res.render('/', {newTask})
        if(taskdDB.length === 0){
            console.log('No hay tareas')
        } else res.status(200).json({data:taskDb})
    } catch (e) {
        console.log(e)
        next(e)
    }
})
router.get((req,res,next) =>{
    try {
        console.log('todo bien')
    } catch (error) {
        console.error(error)
    }
})

module.exports= router