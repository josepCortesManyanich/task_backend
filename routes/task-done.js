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

router.post('/:id', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const task = await Task.findById(id);
        const prevDoneTasks = await DoneTask.find({});
        let newQuantity;

        if (prevDoneTasks.length > 0) {
            const lastDoneTask = prevDoneTasks[prevDoneTasks.length - 1];
            newQuantity = lastDoneTask.quantity + 1;
        } else {
            newQuantity = 1;
        }
        const newDoneTask = await DoneTask.create({ task: id, quantity: newQuantity });
        res.status(200).json({ message: 'Tarea completada exitosamente' });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;