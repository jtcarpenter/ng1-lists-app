// Karma configuration
// Generated on Mon May 27 2013 15:08:54 GMT+0100 (BST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/scripts/vendor/angular.min.js',
  'app/scripts/vendor/angular-resource.min.js',
  'test/vendor/angular-mocks.js',
  'app/scripts/*.js',
  'app/scripts/**/*.js',
  'test/mock/**/*.js',
  'test/spec/**/*.js'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS', 'Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;


// End 2 end config
//proxies = {'/': 'http://localhost:8000/test/e2e/'};

// Karma root to ensure that Karma's source files dont
// interfere with my tests
urlRoot = '/_karma_/';
