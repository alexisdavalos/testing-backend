const request = require('supertest');
const server = require('../api/server.js');
describe('cohorts router', function () {
    it('should run the tests', function () {
        expect(true).toBe(true);
    })
    describe('GET /', function () {
        it('should return 200 OK', function () {
            //don't forget to return request to avoid false positive
            return request(server).get('/api/cohorts').then(res => {
                expect(res.status).toBe(200);
            });
        });//end of test
        it('should return cohorts as the router value,', function() {
            //don't forget to return request to avoid false positive
            return request(server).get('/api/cohorts').then(res =>{
                expect(res.body.router).toBe('cohorts');
            })
        });//end of test
        it('should return JSON formatted body,', function() {
            //don't forget to return request to avoid false positive
            return request(server).get('/api/cohorts').then(res =>{
                expect(res.type).toMatch(/json/);
            })
        });//end of test
        it('should return cohorts as the router value (async version),', async function() {
            //using async await to make it async and avoid false positive
            const res = await request(server).get('/api/cohorts');
            expect(res.body.router).toBe('cohorts');
        });//end of test
    });
})