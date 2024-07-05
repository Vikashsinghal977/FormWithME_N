const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/collageForm").then(()=>{
    console.log('connection succefully');
}).catch((e)=>{
    console.log(`lost connection`);
});