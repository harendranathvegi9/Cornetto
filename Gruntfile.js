/*jslint node: true */
"use strict";

var path = require('path');

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: {
                src: 'public/javascripts/**/*.js'
            },
            all: {
                src: ['Gruntfile.js','public/javascripts/**/*.js','User/**/*.js','Card/**/*.js','Board/**/*.js']
            },

        },
        mochaTest: {
          all: {
            src: ['**/*.spec.js']
          }
        },
        express: {
            server: {
                options: {
                    port: 8080,
                    hostname: '0.0.0.0',
                    server: path.resolve('./app.js'),
                    serverreload: true,
                    livereload: true,
                    bases: [path.resolve(__dirname,'public')],
                    showStack: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js','public/javascripts/**/*.js'],
                task: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default',['jshint','mochaTest','keepalive']);
};
