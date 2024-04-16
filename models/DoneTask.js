const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const doneSchema = new Schema({
  quantity: {
    type: Number,
    default: 0
  },
 
  task: {
    type: [Schema.Types.ObjectId],
    ref: 'Task'  
  }
},
  {
    timestamps: true
  });

module.exports = model("DoneTask", doneSchema);