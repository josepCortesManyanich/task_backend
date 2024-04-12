const {conexion} = require('./db/index.js')
const express = require ('express')
const cors = require ('cors')
const multer = require ('multer')

const app = express()

app.use(cors())

app.listen(() =>{
    console.log('CONECTADO')
})