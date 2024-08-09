const mongoose = require('mongoose');


const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: String, 
    required: true
  },
  time: {
    type: String,
    required: true
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',  
    required: true  
  }
});


const Group = mongoose.model('Group', groupSchema);
const Note = mongoose.model('Note', noteSchema);


module.exports = { Group, Note };
