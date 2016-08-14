"use strict";
const home_component_1 = require('./home/home.component');
const router_1 = require('@angular/router');
const appRoutes = [
    { path: '', component: home_component_1.homeComponent },
    { path: 'tutorial', loadChildren: 'tutorial/tutorial.module', pathMatch: 'prefix' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map