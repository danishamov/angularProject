import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  login(form: NgForm) {
    // if (form.invalid) {
    //   console.error('Invalid Login Form');
    //   return;
    // }

    const { email, password } = form.value;

    const result = this.userService.login(email, password);

    // console.log(result);

    // result.subscribe(() => {
    //   this.router.navigate(['/']);
    // });
  }
}
