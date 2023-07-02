import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-meetup-item',
  standalone: true,
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
  imports: [CommonModule, CardComponent],
})
export class MeetupItemComponent {}
