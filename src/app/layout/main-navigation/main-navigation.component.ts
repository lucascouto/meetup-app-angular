import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  meetupService = inject(MeetupService);
}
