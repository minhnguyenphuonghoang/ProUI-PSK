
/* Created By:     MinhNguyen
 * Created Date:   Jul 10, 2017
*/


module.exports = function() {

    this.Then(/^I can accept the account registration request$/, function (callback) {
        email = browser.params.signup.email;
        usersManagement.setEmailFilter(email).then(function () {
            usersManagement.clickApprove().then(function () {
                callback();
            });
        });
//        callback(null, 'pending');
    });



};








