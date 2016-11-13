import { Component } from '@angular/core';
// Shadow DOM Infos: http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html
// Vorteil, falls Styles komponentenbasiert (Stichwort: Web Components) isoliert werden sollen
import {ViewEncapsulation} from '@angular/core';

import '../../public/scss/styles.scss';

@Component({
    selector: 'tour-of-heroes-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ './app.component.scss' ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    title = 'Tour of Heroes';
}