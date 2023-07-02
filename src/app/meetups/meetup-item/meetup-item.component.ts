import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../ui/card/card.component';
import { Meetup } from 'src/app/interfaces/Meetup';

@Component({
  selector: 'app-meetup-item',
  standalone: true,
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
  imports: [CommonModule, CardComponent],
})
export class MeetupItemComponent {
  @Input() meetup!: Meetup;
}
