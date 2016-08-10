"use strict";
var router_1 = require('@angular/router');
var chapter_component_1 = require('./chapter/chapter.component');
var appRoutes = [
    { path: 'chapter/:id', component: chapter_component_1.chapterComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=tutorial.routing.js.map