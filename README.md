
# grunt-path-check

Grunt Task for Checking Existence of Programs on PATH

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

(none)

## Task Usage

_Run this task with the `grunt path-check` command._

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Usage Example

```js
// [...]
grunt.initConfig({
    "path-check": {
        "tools": {
            files: [ "ls", "cp", "perl", "w3m" ]
        }
    }
});
// [...]
```

