import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

//RouterOutlet,
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
}
