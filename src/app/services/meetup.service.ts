import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Meetup } from '../interfaces/Meetup';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  private apiUrl = 'http://localhost:3000';
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
    return this.http.get<Meetup[]>(`${this.apiUrl}/meetups`);
  }

  postMeetup(meetup: Meetup) {
    return this.http.post(`${this.apiUrl}/meetups`, meetup);
  }
}
