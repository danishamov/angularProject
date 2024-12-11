import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../types/game';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  bastUrl = 'http://localhost:3030/jsonstore';

  constructor(private http: HttpClient) {}

  getGame(limit?: number) {
    let url = `${this.bastUrl}/`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Game[]>(url);
  }

  createGame(
    title: string,
    category: string,
    maxLevel: number,
    imageUrl: string,
    summary: string
  ) {
    const payload = {
      title,
      category,
      maxLevel,
      imageUrl,
      summary,
    };
    return this.http.post(
      `${this.bastUrl}/games`,
      payload
      //   {
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      //   body: JSON.stringify(payload),
      // }
    );
  }
}
