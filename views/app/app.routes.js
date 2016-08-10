"use strict";
var home_component_1 = require('./home/home.component');
var tutorial_component_1 = require('./tutorial/tutorial.component');
var router_1 = require('@angular/router');
var appRoutes = [
    { path: '', component: home_component_1.homeComponent },
    { path: 'tutorial', component: tutorial_component_1.tutorialComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map