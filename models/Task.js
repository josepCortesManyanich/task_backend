const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  prioridad: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
   description: {
    type: String,
    required: true
  },
  propiedad: {
    type: String,
    enum: ['Raquel', 'Josep'],
  }
},
  {
    timestamps: true
  });

module.exports = model("Task", taskSchema);