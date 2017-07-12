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

            setFirstName: function (lastName) {
                return cem.findElement(currentPage,'lastName').sendKeys(lastName);
            },

            setEmail: function (email) {
                return cem.findElement(currentPage,'email').sendKeys(email);
            },

            setReason: function (reason) {
                return cem.findElement(currentPage,'reason').sendKeys(reason);
            },





            setPassword: function (password) {
                return cem.findElement(currentPage,'password').sendKeys(password);
            },

            clickLogin: function () {
                return cem.findElement(currentPage,'password').sendKeys(protractor.Key.ENTER);
            },

            getLogin: function (url) {
                browser.driver.get(browser.params.login.baseUrl)
                return browser.driver.isElementPresent(by.xpath('//*[@value="Sign in"]'));
            },

            checkSuccessfullyMessage: function() {
                browser.waitForAngular();
                var title = cem.findElement('landingPage','title');
                return title.isPresent();

            }
        }

    };

    module.exports = new LoginPage();

}());