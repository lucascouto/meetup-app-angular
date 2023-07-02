import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AllMeetupsComponent } from './pages/all-meetups/all-meetups.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { MainNavigationComponent } from './layout/main-navigation/main-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    AllMeetupsComponent,
    LayoutComponent,
    MainNavigationComponent,
  ],
})
export class AppComponent {
  title = 'meetup-app-angular';
}
