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


    var currentPage = 'usersManagement';


    var UsersManagement = function () {

        return {
//            clickAdmin: function () {
//                return cem.findElement(currentPage,'admin').sendKeys(protractor.Key.ENTER);
//            },

            setEmailFilter: function (email) {
                var elementLocator = "//*[starts-with(@id, 'registration-requests-tab')]//div[@id='scrollBodyTableContainer']/div[2]/span[1]/input[@placeholder='Filter']";
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath(elementLocator));
                browser.wait(EC.visibilityOf(el), 15000);
                return browser.findElement(By.xpath(elementLocator)).sendKeys(email);
            },

            clickApprove: function () {
                browser.sleep(1000);
                var elementLocator = "//*[starts-with(@id, 'registration-requests-tab')]//div[@id='scrollBodyTableContainer']/div[3]/*[contains(@class, 'aha-action')]/aha-html-echo/div/a[1]";
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath(elementLocator));
                browser.wait(EC.visibilityOf(el), 15000);
                return browser.findElement(By.xpath(elementLocator)).click();
            },

            clickDecline: function () {
                browser.sleep(1000);
                var elementLocator = "//*[starts-with(@id, 'registration-requests-tab')]//div[@id='scrollBodyTableContainer']/div[3]/*[contains(@class, 'aha-action')]/aha-html-echo/div/a[2]";
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath(elementLocator));
                browser.wait(EC.visibilityOf(el), 15000);
                return browser.findElement(By.xpath(elementLocator)).click();
            },

            inputReasonToReject: function (reason) {
                var elementLocator = "//*[@id='rejectRejection']";
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath(elementLocator));
                browser.wait(EC.visibilityOf(el), 15000);
                return browser.findElement(By.xpath(elementLocator)).sendKeys(reason);
            },

            clickRejectButton: function () {
                var elementLocator = "//*[@id='rejectModel']//button[@id='btnModalPositive']";
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath(elementLocator));
                browser.wait(EC.visibilityOf(el), 15000);
                browser.findElement(By.xpath(elementLocator)).click();
                return browser.driver.sleep(3000);
            },

            selectATenant: function (tenant) {
                browser.sleep(1000);
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath("//*[@id='orgDropdown']"));
                browser.wait(EC.visibilityOf(el), 15000);

                cem.findElement(currentPage, 'organization').click();

                var childElement = "//*[@id='orgDropdown']//li[text()='<tenant>']";
                childElement = childElement.replace('<tenant>', tenant);

                return browser.findElement(By.xpath(childElement), 15000).click();
            },

            verifyNoUsersFound: function () {
                var elementLocator = "//*[starts-with(@id, 'registration-requests-tab')]//*[text()='No Results']";
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath(elementLocator));
                browser.wait(EC.visibilityOf(el), 15000);
                browser.findElement(By.xpath(elementLocator)).click();
                return browser.driver.isElementPresent(by.xpath(elementLocator));
            }




        }

    };

    module.exports = new UsersManagement();

}());