import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../../types/game';
import { ApiService } from '../api.service';
import { LoadiingComponent } from '../loadiing/loadiing.component';

@Component({
  selector: 'app-collection',
  imports: [RouterLink, LoadiingComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent implements OnInit {
  games: Game[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getGame().subscribe((games) => {
      this.games = games;
      console.log(games);
      this.isLoading = false;
    });
  }
}
