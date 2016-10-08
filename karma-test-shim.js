"use strict";

Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return path.slice(-8) == '_test.js';
}

function isTestFileBuilt(path) {
  var builtPath = '/base/tests/client/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
                         .filter(isSpecFile)
                         .filter(isTestFileBuilt);

// Load our SystemJS configuration.
System.config({
  baseURL: '/base'
});

System.config({
        paths: {
            // paths serve as alias
            'npm:': (isPublic) ? '/' : 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'client',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js',
            'ng-semantic': 'npm:ng-semantic',
            'elasticsearch': 'npm:elasticsearch-browser/elasticsearch.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng-semantic': {
                main: 'ng-semantic',
                defaultExtension: 'js'
            }
        },
        meta: {
            elasticsearch: {
                format: 'global',
                exports: 'elasticsearch'
            }
        }
    });

Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])
  .then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
                                 testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

  })
  .then(() => {
    return Promise.all(
      allSpecFiles.map((moduleName) => {
        return System.import(moduleName);
      }));
  })
  .then(__karma__.start)
  .catch(__karma__.error);
