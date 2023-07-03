import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../ui/card/card.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MeetupService } from 'src/app/services/meetup.service';
import { Meetup } from 'src/app/interfaces/Meetup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-meetup-form',
  standalone: true,
  templateUrl: './new-meetup-form.component.html',
  styleUrls: ['./new-meetup-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, CardComponent],
})
export class NewMeetupFormComponent {
  formBuilder = inject(FormBuilder);
  meetupService = inject(MeetupService);
  router = inject(Router);

  meetupForm = this.formBuilder.group({
    title: ['', Validators.required],
    image: ['', Validators.required],
    address: ['', Validators.required],
    description: ['', Validators.required],
  });

  submitHandler() {
    if (this.meetupForm.invalid) {
      return;
    }

    const meetup = this.meetupForm.value as Meetup;

    this.meetupService.postMeetup(meetup).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
