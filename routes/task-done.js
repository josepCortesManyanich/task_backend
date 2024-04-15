const router = require('express').Router()
const DoneTask = require('../models/DoneTask')
const Task = require ('../models/Task')

/*Get task*/
router.get('/', async(req,res,next) =>{
    try {
        const taskDb= await DoneTask.find({})
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
        const prevTasks = await DoneTask.find({})

        if (prevTasks) {
            const previousQuantity = prevTasks.quantity
            const newQuantity = parseInt(previousQuantity + 1)
            await DoneTask.updateMany({}, { quantity: newQuantity }, { new: true });
            const newDoneTask = new DoneTask({ task: id})
            newDoneTask.save();
        } else {
            const newDoneTask = new DoneTask({ task: id, quantity:1})
            newDoneTask.save();
        }
    } catch (e) {
        console.log(e)
        next(e)
    }
})

module.exports = router