var request = require('supertest');
var expect = require('chai').expect;

var server;
describe('Loyalty One Tests', function() {

before(function () {
    server = require('../server');
});

after (function () {
    server.close();
});

describe('Server starting', function() {
    it ('Successful start of site', function foundRoot(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it ('404 Everything else', function foundNothing(done) {
        request(server)
            .get('/nothing/please')
            .expect (404, done);
    });
});

describe('REST return text', function () {
    it ('Recieve 201 status if calling rest', function seperateStatus(done) {
        request(server)
            .get('/api/restresponse')
            .expect(201, done);
    });
    it ('Recieve REST info for display', function grabRestInfo(done) {
        request(server)
            .get('/api/restresponse')
            .expect(201)
            .end(function(err, res){
                expect(res.text).to.equal('restresponse');
                done();
            });
    });
});


});