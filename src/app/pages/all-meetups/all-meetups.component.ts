import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupService } from 'src/app/services/meetup.service';
import { MeetupListComponent } from '../../meetups/meetup-list/meetup-list.component';
import { Meetup } from 'src/app/interfaces/Meetup';

@Component({
  selector: 'app-all-meetups',
  standalone: true,
  templateUrl: './all-meetups.component.html',
  styleUrls: ['./all-meetups.component.scss'],
  imports: [CommonModule, MeetupListComponent],
})
export class AllMeetupsComponent implements OnInit {
  meetupService = inject(MeetupService);
  isLoading = true;
  meetups: Meetup[] = [];

  ngOnInit(): void {
    this.meetupService.getMeetups().subscribe((meetups) => {
      this.meetups = meetups;
      this.isLoading = false;
    });
  }
}
