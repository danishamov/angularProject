import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:3000/auth';
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  public user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    // return this.http.post('/api/login', { email, password });
    return (
      this.http
        // .post<UserForAuth>('/api/login', { email, password })
        .post<UserForAuth>(`${this.baseUrl}/login`, { email, password })
        .pipe(tap((user) => this.user$$.next(user)))
    );
  }

  crete(title: string, category: string, imageUrl: string, summary: string) {
    return this.http.post;
  }

  register(email: string, password: string) {
    return this.http
      .post<UserForAuth>(`${this.baseUrl}/register`, {
        email,
        password,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post(`${this.baseUrl}/logout`, {})
      .pipe(tap((user) => this.user$$.next(null)));
  }
}
