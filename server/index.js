// import express from 'express';
// import cors from 'cors';
// import userRoutes from './routes/users.js'
// const app = express();
// app.use(express.json({limit:'30mb', extended:true}))
// app.use(express.urlencoded({limit : '30mb', extended: true}))
// app.use(cors());

// app.get('/',(req, res) =>{
//     res.send("this is a stack overflow clone api")
// })
// // app.use('/user', userRoutes)
// const PORT =  5000
// app.listen(PORT,() => {console.log('server running on port ')})
// const PORT = process.env.PORT || 5000
// const CONNECTION_URL = 'mongodb+srv://Lingu:Lingu123@stack-overflow-clone.0lklhhx.mongodb.net/'
// mongoose.set('strictQuery', false);
// mongoose.connect(CONNECTION_URL,{useNewUrlParser : true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
//     .catch((err) => console.log(err.message))

import express from 'express';
const app = express();
const port = 5005;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
  console.log("hello in console");
});

app.post('/user/login',(req,res) =>
{
  console.log("reciieved")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
