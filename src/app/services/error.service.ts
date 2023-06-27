import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService,) { }

  msjError(err: HttpErrorResponse) {
    if (err.error.msg) {
      this.toastr.error(err.error.msg, 'Error');
    } else {
      this.toastr.error(
        'Ocurrió un error. Comuniquese con el administrador',
        'Error'
      );
    }
  }
}
