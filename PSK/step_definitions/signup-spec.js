
/* Created By:     MinhNguyen
 * Created Date:   Jul 10, 2017
*/


module.exports = function() {
    this.Given(/^I navigate to signup page (.*)$/, function (env, callback) {
        env = browser.params.signup.url;
        signupPage.getSignup(env).then(function (completed) {
            browser.ignoreSynchronization = true;
            assert.isTrue(completed, 'Not Signup page');
            callback();
        });
    });


    this.When(/^I sign up with valid (.*), (.*), (.*), (.*)$/, function (email, firstName, lastName, reason, callback) {
        email = browser.params.signup.email;
        firstName = browser.params.signup.firstName;
        lastName = browser.params.signup.lastName;
        reason = browser.params.signup.reason;

        console.log(email);
        console.log(firstName);
        console.log(lastName);
        console.log(reason);
        signupPage.setEmail(email).then(function () {
            signupPage.setFirstName(firstName).then(function () {
                signupPage.setLastName(lastName).then(function () {
                    signupPage.setReason(reason).then(function () {
                        signupPage.clickSubmit().then(function () {
                            callback();
                        });
                    });
                });
            });
        });



//        loginPage.setName(userName).then(function () {
//            loginPage.setPassword(password).then(function () {
//                loginPage.clickLogin().then(function () {
//                    callback();
//                });
//            });
//        });

    });


    this.Then(/^I should see the sign up successful message$/, function (callback) {
        signupPage.checkSuccessfullyMessage().then(function (completed) {
            assert.isTrue(completed, 'Sign up unsuccessful');
            callback();
        });
    });







//
//    this.When(/^Admin accepts the sign up request$/, function (callback) {
//
//
//
//        loginURL = browser.params.login.url;
//        loginPage.getLogin(loginURL).then(function (completed) {
//            browser.ignoreSynchronization = true;
//            assert.isTrue(completed, 'Not Login page');
//            callback();
//        });
//
//
//        email = browser.params.signup.email;
//        firstName = browser.params.signup.firstName;
//        lastName = browser.params.signup.lastName;
//        reason = browser.params.signup.reason;

//        loginPage.setName(userName).then(function () {
//            loginPage.setPassword(password).then(function () {
//                loginPage.clickLogin().then(function () {
//                    callback();
//                });
//            });
//        });
//    });

};








