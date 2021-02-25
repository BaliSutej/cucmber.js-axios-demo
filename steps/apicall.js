const {Given,Then,When, JsonFormatter, UsageJsonFormatter} = require('cucumber');
const axios = require('axios');

    var result;
    var postId;
    Given('A user id {int}', function (int) {
        postId = int;
    });


    When('I make a api call using user id {int}', function (int) {
       
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${int}`)
        .then(function(res){
            return res.data;
        })
        .catch(function(err){
            console.log("Error : "+ err);
            throw new Error("No response");
        })
        .then(function(res){
            result = res;
        })

    });



    Then('I get a response', function () {
        console.log(result);
    });