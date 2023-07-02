import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Meetup } from '../interfaces/Meetup';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  getMeetups() {
    return this.http.get<Meetup[]>(`${this.apiUrl}/meetups`);
  }

  postMeetup(meetup: Meetup) {
    return this.http.post(`${this.apiUrl}/meetups`, meetup);
  }
}
