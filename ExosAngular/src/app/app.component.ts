import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <app-nav-time></app-nav-time>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ExosAngular';

}