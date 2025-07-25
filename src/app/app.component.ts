import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, NavBarComponent, CommonModule],
})
export class AppComponent {
  constructor(public router: Router) {}

  get showNavBar() {
    return !['/login', '/checkout', '/register', '/order-summary'].includes(this.router.url);
  }
}
