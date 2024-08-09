const express=require('express');
const app = express();
const bodyParser=require('body-parser');
const cors=require('cors');

const connectDB=require('./config/databaseConnection');
const { createGroup, getAllGroups, createNote, getAllNotes } = require('./controller/Backendcontroller');
app.use(cors({
  origin:'*'
}))
app.use(bodyParser.json());
connectDB();


app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/groups/create',createGroup);
app.get('/groups/all', getAllGroups);
app.post('/notes/create',createNote);
app.get('/notes/all/:groupId',getAllNotes);

app.listen(3000, () => {
    console.log('Your server running on port 3000');
});