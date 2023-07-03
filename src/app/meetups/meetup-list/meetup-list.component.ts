import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupItemComponent } from '../meetup-item/meetup-item.component';
import { MeetupService } from 'src/app/services/meetup.service';
import { Meetup } from 'src/app/interfaces/Meetup';

@Component({
  selector: 'app-meetup-list',
  standalone: true,
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss'],
  imports: [CommonModule, MeetupItemComponent],
})
export class MeetupListComponent {
  @Input() meetups: Meetup[] = [];
}
