var request = require('supertest');
var expect = require('chai').expect;
var Browser = require('zombie');
var assert = require('assert');
var url = 'http://localhost:3000/';
var browser;

var server;
describe('Loyalty One Tests', function() {

before(function () {
    server = require('../server');
    browser = new Browser({site: 'http://localhost:3000'});
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
describe('Form entry', function() {
    it ('Should show form', function(done){ 
        browser.visit('/', function()
        { 
            browser.assert.attribute('form', 'method', 'POST');
            browser.assert.element('form input[name=message]');
            done(); 
        });
    });
    describe ('Submit Form', function() {

        before(function() {
            return browser.visit('/');
        });
        before(function() {
            browser.fill('message', 'Testing');
            return browser.pressButton('submit');
        });

        it ("Should be successful", function(done) {
            browser.assert.success();
            done();
        });
        it ('Should appear on page', function (done) {
            expect(browser.html("body")).to.contain('Testing');
            done();
        });

        
    });
});
describe ('Username', function() {
    it ('should show user', function(done){
        browser.visit('/', function() {
            browser.assert.element('form input[name=user]');
            done();
        });
    });
    describe('Submit new form', function() {
        before (function() {
            return browser.visit('/');
        });
        before(function() {
            browser.fill('message', "Debug");
            browser.fill('user', "Test User");
            return browser.pressButton('submit');
        });
        it ('Should be successful', function(done) {
            browser.assert.success();
            done();
        });
        it ('Should appear on page', function(done) {
            expect(browser.html('body')).to.contain('Debug');
            done();
        });
    });
});

});