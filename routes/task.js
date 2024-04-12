const router = require('express').Router()
const Task = require('../models/Task')

/*Get task*/

router.get((req,res,next) =>{
    try {
        console.log('todo bien')
    } catch (error) {
        console.error(error)
    }
})

module.exports= router