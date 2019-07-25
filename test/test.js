const mocha = require('mocha')
const assert = require('assert');
const mariochar= require('../models/mariochar');

describe('saving records',()=>{
    it('saves a record',(done)=>{
        var char= new mariochar({
            name:'mario',
            weight:12
            
        })
        char.save().then(()=>{
            assert(char.isNew===false);
            done();
        })
    })
})