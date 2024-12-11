import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { LoadiingComponent } from '../loadiing/loadiing.component';

@Component({
  selector: 'app-authenticate',
  imports: [],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css',
})
export class AuthenticateComponent {
  isAuth = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuth = false;
      },
      error: () => {
        this.isAuth = false;
      },
      complete: () => {
        this.isAuth = false;
      },
    });
  }
}
