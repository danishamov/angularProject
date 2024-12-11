import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../../types/game';
import { LoadiingComponent } from '../loadiing/loadiing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoadiingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getGame().subscribe((games) => {
      this.games = games;
      this.isLoading = false;
    });
  }
}
