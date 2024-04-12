const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  prioridad: {
    type: Number,
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
    enum: ['Raquel', 'Josep','Dasha','Miguel'],
  }
},
  {
    timestamps: true
  });

module.exports = model("Task", taskSchema);