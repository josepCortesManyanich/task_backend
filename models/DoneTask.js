const mongoose = require('mongeso')
const { Schema, model } = mongoose;

const doneSchema = new Schema({
  quantity: {
    type: Number,
    unique: true,
    required: true
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