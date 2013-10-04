
# grunt-path-check

Grunt Task for Checking Existence of Programs on PATH.
In case a program is not found a warning is issues and
Grunt by default stop processing until option `--force` is used.

<p/>
<img src="https://nodei.co/npm/grunt-path-check.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/grunt-path-check.png" alt=""/>


## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/)
before, be sure to check out the [Getting
Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-path-check --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-path-check");
```

## Task Options

- `tasks`: (default `[]`) the names of Grunt tasks to run if
   the patch check for the `src` programs are successful.

- `mandatory`: (default `true`) whether the
   patch check for the `src` programs are mandatory, i.e., if they are
   not successful, stop processing. Set this to `false` in combination
   with the `tasks` option to execute a task if a program exists or skip
   a task if a program does not exist.

## Task Usage

_Run this task with the `grunt path-check` command._

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Usage Example

```js
// [...]
grunt.loadNpmTasks("grunt-shell");
grunt.loadNpmTasks("grunt-path-check");
grunt.initConfig({
    "shell": {
        "generate-txt": {
            command: "w3m -dump doc.html >doc.txt"
        }
    },
    "path-check": {
        "generate-txt": {
            src: [ "w3m" ],
            options: {
                mandatory: false,
                tasks: [ "shell:generate-txt" ]
            }
        }
    }
});
grunt.registerTask("default", [ "path-check:generate-txt" ]);
// [...]
```

