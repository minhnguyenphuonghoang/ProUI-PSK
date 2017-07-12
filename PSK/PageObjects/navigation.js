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


    var currentPage = 'loginPage';


    var LoginPage = function () {

        return {

            get: function () {
                return browser.driver.get(browser.params.login.baseUrl);
                browser.waitForAngular();
            },

            setName: function (username) {
                return cem.findElement(currentPage,'username').sendKeys(username);
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

            checkHomePage: function() {
                browser.waitForAngular();
//                var title = cem.findElement('landingPage','assetTab');
//                var EC = protractor.ExpectedConditions;
//                var el = element(by.xpath('//div[@style="display: none;" and contains(@class,"overlay-loading style-scope instance-view")]'));
//                browser.wait(EC.visibilityOf(el), 10000);

//                var title = browser.driver.wait(until.(
//                console.log(title);
                var title = browser.wait(function(){
//                    return cem.findElement('landingPage','assetTab');
                    return element(by.xpath("//*[contains(text(),'Predix Starter Kit')]"), 30000).isPresent();},30000);
//                console.log(title);
//                console.log();
                return title.isPresent();

            },

            checkLogout: function() {
                //browser.waitForAngular();
                return browser.driver.isElementPresent(by.name('password'));

            }
        }

    };

    module.exports = new LoginPage();

}());