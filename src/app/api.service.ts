import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  bastUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) {}

  createGame(
    title: string,
    category: string,
    maxLevel: string,
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
    return this.http.post(`${this.bastUrl}/games`, payload);
  }
}
