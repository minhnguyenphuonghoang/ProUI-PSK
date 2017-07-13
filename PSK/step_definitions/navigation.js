
/* Created By:     MinhNguyen
 * Created Date:   Jul 10, 2017
*/


module.exports = function() {

    this.When(/^I navigate to Admin - Users Management page$/, function (callback) {
        url = browser.params.navigation.admin_UsersManagement;
        navigation.navigateToAdmin_UserManagement(url).then(function (completed) {
            assert.isTrue(completed, 'Not Admin - Users Management screen');
            callback();
        });
    });



    this.When(/^I sign out$/, function (callback) {
        url = browser.params.navigation.signOut;
        navigation.navigateToSignOut(url).then(function () {
            callback();
        });

    });



};








