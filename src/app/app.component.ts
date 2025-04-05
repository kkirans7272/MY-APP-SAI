import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app-sai';

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event);
        this.isLoading$.next(true);
      } else if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event);
        this.isLoading$.next(false);
      }
    });
  }
}
