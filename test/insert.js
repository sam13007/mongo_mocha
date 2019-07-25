const assert = require('assert');
const authormodel = require('../models/book');

describe('add new author',()=>{
    it('save a record',(done)=>{
        var auth= new authormodel({
            name:"tesla",
            books:[{
                name:'think BIG',
                pages:50
            }]
        })
        auth.save().then(()=>{
            assert(auth.isNew === false);
            done();
        })
    })

    it('find a record',(done)=>{
        authormodel.findOne({name:"tesla"}).then((result)=>{
            console.log(result.books[0].name);
            assert(result.name === "tesla");
            done();
        })
    })
})