const mongoose = require ('mongoose');

async function connection(){
   return await mongoose.connect('mongodb+srv://user:user@cluster0.miafjfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then (() => {
        console.log('Database connected successfully');
      }) 
      .catch ((error) => {
        console.log('Database has not connected properly',error);
      });
}

module.exports = connection;
