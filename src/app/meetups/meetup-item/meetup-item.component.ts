import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../ui/card/card.component';
import { Meetup } from 'src/app/interfaces/Meetup';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-item',
  standalone: true,
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
  imports: [CommonModule, CardComponent],
})
export class MeetupItemComponent implements OnInit {
  @Input() meetup!: Meetup;
  meetupService = inject(MeetupService);
  isMeetupFavorite = signal(false);

  ngOnInit(): void {
    this.isMeetupFavorite.set(this.meetupService.isMeetupFavorite(this.meetup));
  }

  toggleFavorite(meetup: Meetup) {
    if (this.isMeetupFavorite()) {
      this.meetupService.removeFromFavorites(meetup);
      this.isMeetupFavorite.set(false);
    } else {
      this.meetupService.addToFavorites(meetup);
      this.isMeetupFavorite.set(true);
    }
  }
}
