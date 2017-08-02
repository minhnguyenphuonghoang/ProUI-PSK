
/* Created By:     MinhNguyen
 * Created Date:   Jul 10, 2017
*/


module.exports = function() {
    this.Given(/^I navigate to login page$/, function (callback) {
        var env = browser.params.login.baseUrl;

        loginPage.getLogin(env).then(function (completed) {
            browser.ignoreSynchronization = true;
            assert.isTrue(completed, 'Not login page');
            callback();
        });
    });


    this.When(/^I authenticate with valid username: (.*) and password: (.*)$/, function (userName, password, callback) {

        loginPage.setName(userName).then(function () {
            loginPage.setPassword(password).then(function () {
                loginPage.clickLogin().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^I can see the landing page$/, function (callback) {
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

    this.Then(/^I can see the error message$/, function (callback) {
        loginPage.checkLoginFailErrorMessage().then(function (completed) {
            assert.isTrue(completed, 'The error message displays incorrectly.');
            callback();
        });
    });



    this.Then(/^I can use (.*) and (.*) to log in$/, function (username, password, callback) {
        username = browser.params.signup.email;
        password = browser.params.signup.password;
        loginPage.setName(userName).then(function () {
            loginPage.setPassword(password).then(function () {
                loginPage.clickLogin().then(function () {
                    callback();
                });
            });
        });
    });





};








