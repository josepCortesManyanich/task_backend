const mongoose = require ('mongoose')

const conexion = async () => {
    try {
         mongoose.connect('mongodb://localhost:27017/TASKDB')
    } catch (error) {
        console.error(error)
    }
}

module.export = conexion


