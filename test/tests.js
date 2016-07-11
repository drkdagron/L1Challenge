var request = require('supertest');

describe('Server starting', function() {
    var server;
    before(function() {
        server = require('../server');
    });
    after(function() {
        server.close();
    });

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