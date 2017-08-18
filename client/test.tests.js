import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

describe("Client Tests", function() {
        it("testLogin", function() {
            // Meteor.users.remove({});
            before(function(done) {
                Accounts.createUser(currentUser, function(err, success) {
                    Meteor.loginWithPassword(currentUser, function(err) {
                        console.log("This works");
                        // done(); 
                    });
                });
            });
        });
  });