"use strict";
var router_1 = require('@angular/router');
var tutorial_component_1 = require('./tutorial.component');
var chapter_component_1 = require('./chapter/chapter.component');
var tutorialRoutes = [
    {
        path: 'tutorial',
        component: tutorial_component_1.tutorialComponent,
        children: [
            { path: 'chapter/:id', component: chapter_component_1.chapterComponent },
            { path: '', redirectTo: 'chapter/1', pathMatch: 'full' },
        ]
    }
];
exports.tutorialRouting = router_1.RouterModule.forChild(tutorialRoutes);
//# sourceMappingURL=tutorial.routes.js.map