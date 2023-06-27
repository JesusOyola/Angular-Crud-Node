import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  spinnerLoading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  login() {
    // Validamos que el usuario ingrese datos

    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos loas campos son obligatorios', 'Error');
      return;
    }

    // Creamos el body

    const user: User = {
      username: this.username,
      password: this.password,
    };
  this.spinnerLoading = true
    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/products']);
        
        console.log(token);
      },
      error: (err: HttpErrorResponse) => {
        this._errorService.msjError(err);
        this.spinnerLoading = false;
      },
    });
  }

  
}
