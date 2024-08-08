const express=require('express');
const app = express();
const bodyParser=require('body-parser');
const cors=require('cors');

const connectDB=require('./config/databaseConnection');
app.use(cors({
  origin:'*'
}))
app.use(bodyParser.json());
connectDB();


app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Your server running on port 3000');
});