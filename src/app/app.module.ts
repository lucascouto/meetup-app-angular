import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { MainNavigationComponent } from './layout/main-navigation/main-navigation.component';
import { AllMeetupsComponent } from './pages/all-meetups/all-meetups.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NewMeetupComponent } from './pages/new-meetup/new-meetup.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', component: AllMeetupsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'new-meetup', component: NewMeetupComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    LayoutComponent,
    MainNavigationComponent,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
