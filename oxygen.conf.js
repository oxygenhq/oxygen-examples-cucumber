const path = require('path');

module.exports = {
    //
    // ======
    // Specs
    // ======
    // Define a list or a pattern of feature files. 
    //
    specs: [
        './features/**/*.feature',
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. 
    // If "concurrency" value is greater than 1, tests with different capabilities will be executed in parallel.
    //
    concurrency: 1,
    capabilities: [{
        browserName: 'chrome',
    },{
        browserName: 'firefox',
    }],
    //
    // ========
    // Services
    // ========
    // List services you want to enable during the test execution.
    // Available services: selenium-standalone | devtools
    //
    services: ['devtools'],   
    //
    // =======
    // Modules
    // =======
    // List modules you want to enable during the test execution.
    // Loading unnecessary modules might slow down your test execution, 
    // so only load modules that are used in the test.
    // See a list of available modules here: http://docs.oxygenhq.org/
    //
    modules: ['web', 'assert', 'eyes'],
    //
    // =========
    // Framework
    // =========
    // Define a testing framework for this project. 
    // Available frameworks: oxygen | cucumber
    //
    framework: 'cucumber',
    //
    // =========
    // Reporting
    // =========
    // Define test reporter format and corresponding options. 
    // Multiple reporter formats can be specified.
    // Available reporters: json | html | junit | excel | pdf | xml
    //
    reporting: {
        //outputDir: path.join(__dirname, 'reports'),
        reporters: ['json', 'html'],
    },
    //
    // ==========
    // Applitools
    // ==========
    // Define your Applitools service API key.
    //
    applitoolsOpts: {
        key: 'QFhaDgdYdxGeiK2363PcwSrZVi34lUCx6yR1f6diFUA110'
    },    
    //
    // ================
    // Cucumber Options
    // ================
    // Define Cucumber specific options. Based on WDIO Cucumber implementation. 
    // More details here: https://github.com/webdriverio/cucumber-boilerplate
    //
    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> filetype:compiler used for processing required features
        compiler: [],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            './steps/given.js',
            './steps/then.js',
            './steps/when.js',
            // './src/**/*.js',
        ],
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        //tagExpression: 'not @Pending and @Runmenow', // 
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 120000,
    },
    //
    // =====
    // Hooks
    // =====
    // Oxygen provides several hooks that can be used to interfere with the test
    // execution process. 
    //
    hooks: {
        //
        // Hook that gets executed before the test starts.
        // At this point, Oxygen has been already initialized, so you
        // can access Oxygen via 'ox' global variable. 
        //
        beforeTest: async function(runId, options, caps) {
            // initialize Oxygen web module
            await web.init(); 
            await web.setTimeout(1000);
            global.$ = web.findElement;
            global.$$ = web.findElements;
            // initialize Applitools
            //eyes.init('web');
        },
        beforeSuite: function(runId, suiteDef) {
        },
        beforeCase: function(runId, caseDef) {
        },
        beforeStep: function(runId, stepDef) {
        },
        afterStep: function(runId, stepResult, error) {
        },
        afterCase: async function(runId, caseResult, error) {
        },
        afterSuite: function(runId, suiteResult, error) {
        },
        afterTest: async function(runId, testResult, error) {
            await web.dispose(testResult.status);
        }
    }
};
