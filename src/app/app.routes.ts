// src/app/app.routes.ts
import { Routes } from '@angular/router';  // Import Routes from Angular router
import { HomeComponent } from './home/home.component';  // Import HomeComponent
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'}, // default page
    { path: 'home', component: HomeComponent }, // default page
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
  
];
