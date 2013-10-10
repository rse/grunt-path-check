/*
**  grunt-path-check -- Grunt Task for Checking Existence of Programs on PATH
**  Copyright (c) 2013 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* global module: false */
module.exports = function (grunt) {
    /* global require: false */
    var path  = require("path");
    var chalk = require("chalk");

    /*  define the Grunt task  */
    grunt.registerMultiTask("path-check", "Check Existence of Programs on PATH", function () {
        /*  prepare task options  */
        var options = this.options({
            mandatory: true,
            tasks: []
        });
        grunt.verbose.writeflags(options, "Options");

        /*  retrieve the PATH elements  */
        /* global process: false */
        var PATH = process.env.PATH.split(path.delimiter);

        /*  iterate over all src-dest file pairs  */
        var errors = 0;
        this.files.forEach(function (f) {
            /*  iterate over all programs  */
            f.orig.src.forEach(function (name) {
                /*  iterate over all path elements  */
                var found = false;
                PATH.forEach(function (dir) {
                    /*  short-circuiting  */
                    if (found)
                        return;

                    /*  check for program existence  */
                    var file = path.join(dir, name);
                    if (grunt.file.exists(file)) {
                        grunt.log.writeln("Program \"" + chalk.green(name) + "\" found under \"" + chalk.green(file) + "\".");
                        found = true;
                    }
                });

                /*  just record the fact that a program is not found
                    (intentionally still does not abort Grunt processing)  */
                if (!found) {
                    grunt.log.warn("Program \"" + chalk.red(name) + "\" not found in PATH.");
                    errors++;
                }
            });
        });
        if (errors > 0) {
            if (options.mandatory)
                grunt.fail.warn(chalk.red(errors) + " program(s) not found in PATH!");
            else
                grunt.log.warn(chalk.red(errors) + " program(s) not found in PATH!");
            if (options.tasks.length > 0)
                grunt.log.writeln("Skipping dependent tasks: \"" +
                    options.tasks
                    .map(function (task) { return chalk.red(task); })
                    .join("\", \"") +
                "\"");
        }
        else if (options.tasks.length > 0) {
            grunt.log.writeln("Running dependent tasks: \"" +
                options.tasks
                .map(function (task) { return chalk.green(task); })
                .join("\", \"") +
            "\"");
            grunt.task.run(options.tasks);
        }
    });
};

