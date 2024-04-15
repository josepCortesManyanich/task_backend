const mongoose = require ('mongoose')

const basedatos = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/TASKDB')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    basedatos
}


