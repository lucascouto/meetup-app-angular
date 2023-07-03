import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupService } from 'src/app/services/meetup.service';
import { MeetupListComponent } from '../../meetups/meetup-list/meetup-list.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  imports: [CommonModule, MeetupListComponent],
})
export class FavoritesComponent {
  meetupService = inject(MeetupService);
}
