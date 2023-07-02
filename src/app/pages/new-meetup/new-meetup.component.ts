import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMeetupFormComponent } from '../../meetups/new-meetup-form/new-meetup-form.component';

@Component({
  selector: 'app-new-meetup',
  standalone: true,
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.scss'],
  imports: [CommonModule, NewMeetupFormComponent],
})
export class NewMeetupComponent {}
