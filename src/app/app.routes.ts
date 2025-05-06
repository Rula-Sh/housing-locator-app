import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewLocationComponent } from './components/view-location/view-location.component';

export const routes: Routes = [
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: 'locations', component: HomeComponent },
  { path: 'locations/:id', component: ViewLocationComponent },
];
