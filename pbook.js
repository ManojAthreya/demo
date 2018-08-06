const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts')
 .then( () => console.log('Connected to mongodb'))
 .catch(err => console.error('Could not connect...',err))

 const phoneSchema = new mongoose.Schema({
     name:String,
     mobile:String,
     phone:Number,
 });

 const Phone = mongoose.model('Phone',phoneSchema);
 async function createphone(){
     const phone = new Phone({
     name:'Manoj',
     mobile:'Redmi Note 5 Pro',
     phone:'7204433566'
 });

 const result = await phone.save();
 console.log(result);
}
createphone();