(function () {
    var CONTEXT = '/GitHub/res-hash-guide',
        rootDir = CONTEXT + '/dist',
        dev = location.href.indexOf(rootDir) === -1;
    require.config({
        urlArgs: dev ? 'hashVersion' : typeof manifest === 'undefined' || function (moduleName, url) {
            url.indexOf(rootDir) === 0 && (url = url.replace(rootDir + '/', ''));
            return '?' + manifest[url]
        },
        baseUrl: rootDir,
        waitSeconds: 0,
        paths: {
            jquery: 'js/jquery-1.12.1',
            bootstrap: 'js/bootstrap'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    });

    require(['bootstrap'], function () {
        console.log($);
    });
})();