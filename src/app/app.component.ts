import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AllMeetupsComponent } from './pages/all-meetups/all-meetups.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, AllMeetupsComponent],
})
export class AppComponent {
  title = 'meetup-app-angular';
}
