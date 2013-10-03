
/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "path-check": {
            "tools": {
                src: [ "cp", "ls", "mv", "perl", "w3m" ]
            }
        }
    });

    grunt.loadTasks("../tasks");

    grunt.registerTask("default", [ "path-check" ]);
};

