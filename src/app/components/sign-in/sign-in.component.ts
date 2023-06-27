import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  spinnerLoading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  addUser() {
    // Validar que el usuario ingrese valores

    if (
      this.username == '' ||
      this.password == '' ||
      this.confirmPassword == ''
    ) {
      this.toastr.error('Todos loas campos son obligatorios', 'Error');
      return;
    }

    // VALIDAMOS QUE LAS PASSWORS SEAN IGUALES

    if (this.password != this.confirmPassword) {
      this.toastr.error('Las contraseñas ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el body

    const user: User = {
      username: this.username,
      password: this.password,
    };

    this.spinnerLoading = true;
    this._userService.signIn(user).subscribe({
      next: () => {
        this.spinnerLoading = false;
        this.toastr.success(
          `El usuario ${this.username} fue registrado con éxito`,
          'Usuario Registrado'
        );
        this.router.navigate(['/login']);
      },
      error: (err: HttpErrorResponse) => {
        this.spinnerLoading = false;
        this._errorService.msjError(err);
      },
    });
  }

  
  
}
