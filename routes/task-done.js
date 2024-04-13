const router = require('express').Router()
const DoneTask = require('../models/DoneTask')

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
/*Añadir task echa */
router.post('/:id',  async(req,res,next) => {
    const { id } = req.params;
   
    try {
        const task = await Task.findById(id);
        const prevTasks = await TaskDone.find({})
        if (prevTasks) {
            const previousQuantity = prevTasks.quantity
            const newQuantity =  prevTasks.length + 1
            await TaskDone.updateMany({}, { quantity: newQuantity });
            const newTaskDone = new TaskDone({ task: id})
            newTaskDone.save();
        } else {
            const newTaskDone = new TaskDone({ task: id, quantity:1})
            newTaskDone.save();
        }
    } catch (e) {
        console.log(e)
        next(e)
    }
})
