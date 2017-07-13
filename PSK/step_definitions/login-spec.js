
/* Created By:     MinhNguyen
 * Created Date:   Jul 10, 2017
*/


module.exports = function() {
    this.Given(/^I navigate to login page (.*)$/, function (env, callback) {
        env = browser.params.login.url;
        loginPage.getLogin(env).then(function (completed) {
            browser.ignoreSynchronization = true;
            assert.isTrue(completed, 'Not login page');
            callback();
        });
    });


    this.When(/^I authenticate with valid (.*) and (.*)$/, function (userName, password, callback) {
        userName = browser.params.login.username;
        password = browser.params.login.password;
        console.log(userName);
        console.log(password);
        loginPage.setName(userName).then(function () {
            loginPage.setPassword(password).then(function () {
                loginPage.clickLogin().then(function () {
                    callback();
                });
            });
        });

    });

    this.Then(/^I should see the landing page$/, function (callback) {
        loginPage.checkHomePage().then(function (completed) {
            assert.isTrue(completed, 'Not logged in');
            callback();
        });
    });


    this.When(/^I log in with Admin role$/, function (callback) {
        userName = browser.params.login.adminUserName;
        password = browser.params.login.adminPassword;
        loginPage.setName(userName).then(function () {
            loginPage.setPassword(password).then(function () {
                loginPage.clickLogin().then(function () {
                    callback();
                });
            });
        });
    });





    this.Then(/^I can use (.*) and (.*) to log in$/, function (username, password, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });


};








