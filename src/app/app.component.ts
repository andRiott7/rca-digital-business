import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('opacityAnimations', [
            transition('* <=> *', [
                style({ opacity: 0 }),
                animate('350ms linear', style({ opacity: 1 }))
            ])
        ])
    ]
})
export class AppComponent {
    constructor(
        private router: Router,
        private titleService: Title,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
    }

    // Click to Scroll
    scrollTo(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }

    loadAnimation(outlet: RouterOutlet) {
        return (outlet && outlet.isActivated ? outlet.activatedRoute : '');
    }
}
