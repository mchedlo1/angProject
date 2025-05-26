import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { VagonsComponent } from './vagons/vagons.component';
import { BookedComponent } from './booked/booked.component';

export const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'services', component : DetailsComponent},
    {path : 'booked', component : BookedComponent},
    {path : 'vagons/:id/:date', component : VagonsComponent},

];
