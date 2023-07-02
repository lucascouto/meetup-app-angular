import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupItemComponent } from '../meetup-item/meetup-item.component';

@Component({
  selector: 'app-meetup-list',
  standalone: true,
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss'],
  imports: [CommonModule, MeetupItemComponent],
})
export class MeetupListComponent {}
