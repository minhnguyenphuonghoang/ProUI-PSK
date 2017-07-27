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


    var currentPage = 'navigation';


    var Navigation = function () {

        return {
            clickAdmin: function () {
                return cem.findElement(currentPage,'admin').sendKeys(protractor.Key.ENTER);
            },

            clickUsersManagement: function () {
                return cem.findElement(currentPage,'usersManagement').sendKeys(protractor.Key.ENTER);
            },

            clickUserInfo: function () {
                return cem.findElement(currentPage,'userInfo').sendKeys(protractor.Key.ENTER);
            },

            clickSignOut: function () {
                return cem.findElement(currentPage,'signOut').sendKeys(protractor.Key.ENTER);
            },

            navigateToAdmin_UserManagement: function () {
                var url = browser.params.navigation.admin_UsersManagement;
                browser.driver.get(url);
                var EC = protractor.ExpectedConditions;
                var el = element(by.xpath("//div[@id='tabtitle'][contains(., 'Pending Request')]"));
                browser.wait(EC.visibilityOf(el), 30000);
                return browser.driver.isElementPresent(by.xpath("//div[@id='tabtitle'][contains(., 'Pending Request')]"));
            },

            navigateToSignOut: function () {
                browser.driver.get(url);
                return browser.driver.sleep(3000);

            }


        }

    };

    module.exports = new Navigation();

}());