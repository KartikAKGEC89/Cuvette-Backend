const { Group, Note } = require('../models/Backendmodel');

const createGroup=async (req,res)=>{
  try {
    const {name,color}=req.body;
    if(!name){
      return res.json({success:false,message:'Please fill all the fields'});
    }
    const newGroup=new Group({name,color});
    const savedNewGroup=await newGroup.save();
    res.status(200).json({success:true,group:savedNewGroup});
  } catch (error) {
    res.json({success:false, message: 'Something went wrong'});
    console.log(error)
  }
}
const getAllGroups=async (req,res)=>{
  try {
    const groups= await Group.find();
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

const createNote=async (req,res)=>{
  try {
    const {content,date,time,groupId}=req.body;
    const newNote=new Note({content,date,time,groupId});
    const savedNote=await newNote.save();
    res.status(201).json({success:true,note:savedNote});
  } catch (error) {
    res.json({success:false, message: 'Something went wrong'});
  }
}
const getAllNotes=async (req,res)=>{
  try {
    const {groupId}=req.params;
    if (!groupId) {
      return res.status(400).send('Group ID is required');
    }
    const notes= await Note.find({groupId});
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
module.exports = { createNote, getAllNotes, createGroup,getAllGroups };