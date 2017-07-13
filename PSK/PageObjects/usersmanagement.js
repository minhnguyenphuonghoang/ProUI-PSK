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
            clickAdmin: function () {
                return cem.findElement(currentPage,'admin').sendKeys(protractor.Key.ENTER);
            },

            this.Then(/^I can accept the account registration request$/, function (callback) {
                // Write code here that turns the phrase above into concrete actions
                callback(null, 'pending');
            });



        }

    };

    module.exports = new UsersManagement();

}());