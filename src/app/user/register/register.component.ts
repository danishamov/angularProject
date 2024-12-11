import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { matchPasswordValidators } from '../../utils/match-passwords.validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // form = new FormGroup({
  //   email: new FormControl(''),

  //   //TO DO put passwords in group
  //   passGroup: new FormGroup(
  //     {
  //       password: new FormControl('', [
  //         Validators.required,
  //         Validators.minLength(5),
  //       ]),
  //       rePassword: new FormControl('', [Validators.required]),
  //     },
  //     {
  //       validators: [matchPasswordValidators('password', 'rePassword')],
  //     }
  //   ),
  // });

  constructor(private userService: UserService, private router: Router) {}
  register(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    const { email, password, rePassword } = form.value;

    console.log(form.value);

    this.userService.register(email, password).subscribe(() => {
      this.router.navigate(['/collection']);
    });
  }
}
