const mongoose = require("mongoose");
mongoose.Promise=global.Promise;


before((done)=>{
    mongoose.connect('mongodb://localhost:27017/test');

    mongoose.connection.once('open',function(){
        console.log("connected");
        
        done();
    }).on('error',function(err){
        console.log("error",err)
    })

})

beforeEach((done)=>{
    
    
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    })
})

