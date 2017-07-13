/**
 * Copyright (c) 2013 - 2015 GE Global Research. All rights reserved.
 * The copyright to the computer software herein is the property of
 * GE Global Research. The software may be used and/or copied only
 * with the written permission of GE Global Research or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the software has been supplied.
 */

(function () {
    'use strict';


    var currentPage = 'signupPage';


    var SignupPage = function () {

        return {

            get: function () {
                return browser.driver.get(browser.params.login.baseUrl);
                browser.waitForAngular();
            },

            setFirstName: function (firstName) {
                return cem.findElement(currentPage,'firstName').sendKeys(firstName);
            },

            setLastName: function (lastName) {
                return cem.findElement(currentPage,'lastName').sendKeys(lastName);
            },

            setEmail: function (email) {
                return cem.findElement(currentPage,'email').sendKeys(email);
            },

            setReason: function (reason) {
                return cem.findElement(currentPage,'reason').sendKeys(reason);
            },

            getSignup: function (url) {
                browser.driver.get(browser.params.signup.baseUrl)
                return browser.driver.isElementPresent(by.xpath('//input[@id="txtEmail"]'));
//                return cem.findElement(currentPage, 'email');
            },

            clickSubmit: function () {
//                return cem.findElement(currentPage,'password').sendKeys(protractor.Key.ENTER);
                return cem.findElement(currentPage, 'submitButton').click();
            },







//            setPassword: function (password) {
//                return cem.findElement(currentPage,'password').sendKeys(password);
//            },


            checkSuccessfullyMessage: function() {
                browser.waitForAngular();

                var message = cem.findElement('signupPage','signUpSuccessfulMessage');
                return message.isPresent();

            }
        }

    };

    module.exports = new SignupPage();

}());