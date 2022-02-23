'use stirct' 
const server = require('../src/server.js');
const validator = require('../src/middleware/validator.js');
const supertest = require('supertest');

const request = supertest(server.app);

describe('testing validator middleware',()=>{
    
    it('testing /person',async()=>{
        const response = await request.get('/person?');
        expect(response.status).toEqual(500);    
    })

    it('test /', async()=>{
        const response = await request.get('/person?name=idrees');
        expect(response.status).toEqual(200)
    })
})