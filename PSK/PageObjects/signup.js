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
                browser.driver.get(browser.params.signup.baseUrl);
                browser.ignoreSynchronization = true;
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath('//input[@id="txtEmail"]'));
                browser.wait(EC.visibilityOf(el), 5000);
                return browser.driver.isElementPresent(by.xpath('//input[@id="txtEmail"]'));
//                return cem.findElement(currentPage, 'email');
            },

            clickSubmit: function () {
//                return cem.findElement(currentPage,'password').sendKeys(protractor.Key.ENTER);
                return cem.findElement(currentPage, 'submitButton').sendKeys(protractor.Key.ENTER);
            },

            setPassword: function (password) {
                browser.ignoreSynchronization = false;
                var EC = protractor.ExpectedConditions;
                var el = element(by.name("password"));
                browser.wait(EC.visibilityOf(el), 5000);
                return cem.findElement(currentPage,'password').sendKeys(password);
            },

            setConfirmPassword: function (confirmPassword) {
                return cem.findElement(currentPage,'confirmPassword').sendKeys(confirmPassword);
            },

            clickSignUpButton: function () {
                return cem.findElement(currentPage, 'createAccountButton').sendKeys(protractor.Key.ENTER);
            },

            openMailServer: function (url) {
                return browser.driver.get(url);
            },

            clickRegistrationMail: function () {
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath("//div[@id='public_maildirdiv']/div/div[1]//div[contains(text(),'[PSK] Welcome to Predix Starter Kit!')]"));
                browser.wait(EC.visibilityOf(el), 30000);
                el.click();
                return browser.sleep(10000);
            },

            openRegistrationLink: function () {


//                browser.getPageSource().then(function (source) {
//                    console.log(source);
//                });

//                browser.sleep(2000);
//                browser.switchTo().frame('publicshowmaildivcontent');



//                browser.sleep(1000);
//                browser.getPageSource().then(function (source) {
//                    console.log(source);
//                });
//                var ps1 = browser.getPageSource();
//
//                console.log(ps1);

                var EC = protractor.ExpectedConditions;
                var test_el = element(by.xpath('//iframe[@id="publicshowmaildivcontent"]'));
                var el = element(by.xpath("//a"));
//                browser.wait(EC.visibilityOf(test_el), 5000);
//                browser.driver.switchTo().defaultContent();
//                browser.driver.switchTo().frame("publicshowmaildivcontent");
//                browser.driver.switchTo().defaultContent();
//                browser.wait(EC.visibilityOf(el), 5000);
//                console.log("after waiting for element inside frame");
//                var url = browser.findElement(by.xpath("//a")).getAttribute('href');
//                console.log(url);
//                browser.driver.switchTo().defaultContent();
//                browser.driver.get('https://www.google.com.vn/');
//                fs.readFile('');
                fs.readFile('D:/ProUI-PSK/url.txt', 'utf8', function (err,data) {
                    if (err) {
                        return console.log(err);
                    }
                    browser.ignoreSynchronization = true;
                    browser.driver.get(data);
                });
                return browser.sleep(2000);
            },

            checkSuccessfullyMessage: function() {
                var EC = protractor.ExpectedConditions;
                var test_el = element(by.xpath("//*[contains(@id,'sign-up-done')]/div/div[2]/p"));
                browser.wait(EC.visibilityOf(test_el), 30000);
                var message = cem.findElement('signupPage','signUpSuccessfulMessage');
                return message.isPresent();
            }
        }

    };

    module.exports = new SignupPage();

}());