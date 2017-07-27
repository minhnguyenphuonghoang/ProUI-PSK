
/* Created By:     MinhNguyen
 * Created Date:   Jul 10, 2017
*/


module.exports = function() {

    this.Then(/^I can accept the account registration request of email: (.*)$/, function (email, callback) {
        usersManagement.setEmailFilter(email).then(function () {
            usersManagement.clickApprove().then(function () {
                callback();
            });
        });
    });


    this.When(/^I select a tenant: (.*)$/, function (tenant, callback) {
        usersManagement.selectATenant(tenant).then(function () {
           callback();
        });
    });


    this.Then(/^I can decline the account registration request of email: (.*) by a reason: (.*)$/, function (emailAddress, reasonMessage, callback) {
        usersManagement.setEmailFilter(emailAddress).then(function () {
            usersManagement.clickDecline().then(function () {
                usersManagement.inputReasonToReject(reasonMessage).then(function () {
                    usersManagement.clickRejectButton().then(function () {
                        callback();
                    })
                });
            });
        });
    });

    this.Then(/^User with email: (.*) no longer in Pending Request tab$/, function (emailAddress, callback) {
        usersManagement.setEmailFilter(emailAddress).then(function () {
           usersManagement.verifyNoUsersFound().then(function (completed) {
               assert.isTrue(completed, 'Found user: ' + emailAddress + ' while expecting No Results.');
               callback();
           });
        });
    });

};








