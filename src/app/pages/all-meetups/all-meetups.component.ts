import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-all-meetups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-meetups.component.html',
  styleUrls: ['./all-meetups.component.scss'],
})
export class AllMeetupsComponent implements OnInit {
  meetupService = inject(MeetupService);

  ngOnInit(): void {
    this.meetupService
      .getMeetups()
      .subscribe((meetups) => console.log(meetups));
  }
}
