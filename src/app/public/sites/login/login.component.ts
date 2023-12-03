import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData: any = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.loginData.email, this.loginData.password).subscribe(
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
