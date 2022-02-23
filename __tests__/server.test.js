'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');

const request = supertest(server.app);

describe('testing API server',()=>{

    it('testing /person',async()=>{
        const response = await request.get('/undefinedRout');
        expect(response.status).toEqual(404);    
    })

    it('test /', async()=>{
        const response = await request.post('/person');
        expect(response.status).toEqual(404)
    })

})
