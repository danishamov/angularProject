import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [RouterLink, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  createGame(form: NgForm) {
    const { title, category, maxLevel, imageUrl, summary } = form.value;
    // const payload = {
    //   title,
    //   category,
    //   maxLevel,
    //   imageUrl,
    //   summary,
    // };

    console.log(form.value);

    this.apiService
      .createGame(title, category, maxLevel, imageUrl, summary)
      .subscribe(() => {
        this.router.navigate(['/collection']);
      });
  }
}
