import { Routes } from '@angular/router';
import { AllMeetupsComponent } from './pages/all-meetups/all-meetups.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NewMeetupComponent } from './pages/new-meetup/new-meetup.component';

export const routes: Routes = [
  { path: '', component: AllMeetupsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'new-meetup', component: NewMeetupComponent },
];
