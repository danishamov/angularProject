import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../../types/game';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  // isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getGame().subscribe((games) => {
      this.games = games;
      // this.isLoading = false;
    });
  }
}
