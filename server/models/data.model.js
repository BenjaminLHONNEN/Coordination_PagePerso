const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  labels: [{
    type: String,
  }],
  datasets: [
    {
      data: [{
        type: Number,
      }],
      name: {type: String}
    }
  ]
}, {
  versionKey: false
});


module.exports = mongoose.model('Data', DataSchema);
