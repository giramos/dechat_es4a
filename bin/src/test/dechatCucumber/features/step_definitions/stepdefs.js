
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// send to a compasion a message

Given('I\'m sending a message through the chat', function () {
           // Write code here that turns the phrase above into concrete actions
           this.message = true;
         });
		 
When('I send a {string} message', function (string) {
           // Write code here that turns the phrase above into concrete actions
           this.response = string;
           
         });		 
		 
Then('My friend gets the {string} message I sent him', function (string) {
           // Write code here that turns the phrase above into concrete actions
           if(this.message){
			   assert.equal(this.response, string); 
		   }
         });		
         
  // my friends got listed
  Given('I press List Friends button', function () {
    // Write code here that turns the phrase above into concrete actions
    this.list = true;
  });
  When('My friend {string} got listed', function (string) {
    // Write code here that turns the phrase above into concrete actions
    this.response = string;
  });
       
  Then('I looked for my friend {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    if(this.message){
      assert.equal(this.response, string); 
    }
  });

  // chatting_with_a_one_friend

  Given('I am using the app', function () {
    // Write code here that turns the phrase above into concrete actions
    this.app = true;
  });

  When('I am chatting with my friend {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    this.response = string;
  });

  Then('I can read he has sent me {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    if(this.message){
      assert.equal(this.response, string); 
    }
  });