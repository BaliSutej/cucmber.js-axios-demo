const {Given,Then,When} = require('cucumber');
const {getMethod,postMethod,putMethod,deleteMethod} = require('../src/fetch-data/apimethods');
const assert = require('assert');
 
    // Step definition for call a get api scenario
    Given('A post id {int}', function (int) {
        this.postid = int;
    });
    When('I make a api call using postid',async function () {  
        this.result = await getMethod(this.postid);
    });
    Then('I get a response', function () {
        console.log(this.result.data);
    });


    // step definition for call a post scenario
    Given('A user with data {int} , {string} and {string}', function (int, string, string2) {
         this.userId = int;
         this.title = string;
         this.body = string2;
    });
    When('I make a api post',async function () {
        let body = {
            title : this.title,
            body : this.body,
            userId : this.userId
        };
        this.res = await postMethod(body); 
    });
    Then('I get a response with status code {int}', function (int) {
        assert.strictEqual(int, this.res.status); 
    });


    // step definition for call a put scenario
    Given('A {int}, {string} , {string} for {int}', function (int, string, string2, int2) {
       this.postId = int;
       this.title = string;
       this.body = string2;
       this.userId = int2;
    });
    When('api update call is made', async function () {
        let body = {
            title : this.title,
            body : this.body,
            userId : this.userId,
            postId : this.postId
        };
        this.res = await putMethod(body);

    });
    Then('I get a response with {int}', function (int) {
        assert.strictEqual(this.res.status,int);
    });


    // step definition for call a delete api scenario
    
    Given('A postid {int}', function (int) {
        this.postId = int;
    });

    When('api delete call is made', async function () {
        this.res = await deleteMethod(this.postId);
    });

    Then('I get a response with code {int}', function (int) {
        assert.strictEqual(this.res.status,int);
    });

    