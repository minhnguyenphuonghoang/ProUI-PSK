module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 1. jshint
        jshint: {
            files: ['Gruntfile.js', 'step_definitions/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },


        // 2. execute
        execute: {
            target: {
                src:['./node_modules/proui-utils/updateChromeDriver.js']
            }
        },


        // 3. shell
        shell: {
            options: {
                stdout:true
            },
            disableSSL:
            {
                command:'npm config set strict-ssl false'
            },
//            npm_install: {
//                command: 'npm install --only=dev --proxy=http://proxy-src.research.ge.com:8080'
//            },
//            npm_update: {
//                command: 'npm update --only=dev --proxy=http://proxy-src.research.ge.com:8080'
//            },
//            protractor_install: {
//                command: 'node ./node_modules/protractor/bin/webdriver-manager update --proxy=http://proxy-src.research.ge.com:8080 --ignore_ssl'
//            },
           npm_install: {
               command: 'npm install --only=dev'
           },
           npm_update: {
               command: 'npm update --only=dev'
           },
           protractor_install: {
               command: 'node ./node_modules/protractor/bin/webdriver-manager update --ignore_ssl'
           },
            // ie_install: {
            //     command: 'node ./node_modules/protractor/bin/webdriver-manager update --ie --proxy=http://proxy-src.research.ge.com:8080'
            // }


        },
        protractor: {
            default: {
                options: {
                    keepAlive: false,
                    // configFile: 'Common_Template/Conf/protractor.cucumber.common.conf.js',
                    configFile: 'PSK/Conf/protractor.cucumber.common.conf.js',
                    args: {suite: 'login',
                        params:{"login": {
                        "baseUrl":grunt.option('baseUrl'),
                        "username":grunt.option('username'),
                        "password":grunt.option('password'),
                        "adminusername":grunt.option('adminusername'),
                        "adminpassword":grunt.option('adminpassword')
                        }
                    }}
                },
            },
                
            test: {
                options: {
                    keepAlive: false,
                    configFile: grunt.option('conf'),
                    args: {cucumberOpts:grunt.option('spec'),suite: grunt.option('suite')}
                },
            },

            browser:{
                options: {
                    keepAlive: false,
                    configFile: grunt.option('conf'),
                    args: {cucumberOpts:grunt.option('spec'),suite: grunt.option('suite'), browser: grunt.option('browser')}
                },
            },

            noSuite: {
                options: {
                    keepAlive: false,
                    configFile: grunt.option('conf'),
                },


            },
            singlerun: {},
            auto: {
                keepAlive: false,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        },
//        report: {
//            options: {
//                dest: './CucumberReport/',
//                output: 'report.html',
//                testJSONResultPath: './Reports/json_report/',
//                testJSONDirectory: './Reports/',
//            },
//        },
//        'protractor-cucumber-html-report': {
//            default_options: {
//                options: {
//                    dest: 'tmp',
//                    output: 'report.html',
//                    testJSONDirectory: './Reports/json_report/',
//                    reportTitle: "Test report generated via automatic tests"
//                }
//            }
//        }

    });

    var target = grunt.option('target') || 'def';


    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-execute');

    grunt.loadNpmTasks('grunt-shell-spawn');

    grunt.loadNpmTasks('grunt-protractor-runner');

    //grunt.loadNpmTasks('perfjankie');

    grunt.registerTask('default',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:default');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });

    grunt.registerTask('test',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:test');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });

    grunt.registerTask('noSuite',  function(arg) {
        try {
//            grunt.task.run('clean');
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:noSuite');
//            grunt.task.run('protractor-cucumber-html-report');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });


    grunt.registerTask('browser',  function(arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:browser');

        } catch(e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });


    grunt.registerTask('run', ['protractorperf']);
};
