const assert = require("assert");
const mariochar= require('../models/mariochar');
var char;
describe('find record',()=>{
    beforeEach((done)=>{
        char= new mariochar({
            name :'Mario',
            weight:15
        });

        char.save().then(()=>{
            done();
        })
    })

    it('find a rec',(done)=>{
        mariochar.find({name:'Mario'}).then((result)=>{


            assert(result[0].name==='Mario');
            console.log(result);
            
            done();
        })
    })


    it("find one by ID",(done)=>{
        mariochar.findOne({_id:char._id}).then((res)=>{
            console.log("res",res);
            
            assert(res._id.toString()===char._id.toString());
            done();
        })
    })
})