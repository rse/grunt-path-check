
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadTasks("../tasks");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        shell: {
            "cat": {
                command: "cat Gruntfile.js"
            }
        },
        "path-check": {
            "tools1": {
                src: [ "cp", "ls", "mv", "perl", "w3m" ]
            },
            "tools2": {
                src: [ "catx" ],
                options: { mandatory: false, tasks: [ "shell:cat" ] }
            }
        }
    });

    grunt.registerTask("default", [ "path-check" ]);
};

