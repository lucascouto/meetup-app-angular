import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Meetup } from '../interfaces/Meetup';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  private apiUrl = 'https://react-meetup-app-7d585-default-rtdb.firebaseio.com';
  http = inject(HttpClient);
  favorites = signal<Meetup[]>([]);

  get totalFavorites() {
    return this.favorites().length;
  }

  isMeetupFavorite(meetup: Meetup) {
    return this.favorites().some((favorite) => favorite.id === meetup.id);
  }

  addToFavorites(meetup: Meetup) {
    this.favorites.mutate((oldFavorites) => oldFavorites.push(meetup));
  }

  removeFromFavorites(meetup: Meetup) {
    this.favorites.update((oldFavorites) =>
      oldFavorites.filter((favorite) => favorite.id !== meetup.id)
    );
  }

  getMeetups() {
    return this.http.get<Meetup[]>(`${this.apiUrl}/meetups.json`).pipe(
      map((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = { ...data[key], id: key };
          meetups.push(meetup);
        }
        return meetups;
      })
    );
  }

  postMeetup(meetup: Meetup) {
    return this.http.post(`${this.apiUrl}/meetups.json`, meetup);
  }
}
