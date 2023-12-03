import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  newUser: any = {
    firstName: '',
    lastName: '',
    email: '',
    nationality: '',
    password: '',
    birthdate: null,
  };

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    this.userService.registerUser(this.newUser).subscribe(
      (response) => {
        console.log(response);

        // Redirige al usuario a la intranet
        this.router.navigate(['/intranet/homeLogeado']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
