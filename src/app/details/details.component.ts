import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-details',
  imports: [RouterLink, CommentComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {}
