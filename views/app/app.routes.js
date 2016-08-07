"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var tutorial_component_1 = require('./tutorial/tutorial.component');
var routes = [
    { path: '', component: home_component_1.homeComponent },
    { path: 'tutorial', component: tutorial_component_1.tutorialComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map