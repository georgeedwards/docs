/// <reference path="../node_modules/@types/core-js/index.d.ts" />
import { enableProdMode } from "@angular/core";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);