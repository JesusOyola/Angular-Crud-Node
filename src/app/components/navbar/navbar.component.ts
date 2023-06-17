import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router:Router) { }
=======
  constructor() { }
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)

  ngOnInit(): void {
  }

<<<<<<< HEAD
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
    
  }

=======
>>>>>>> 1f8f509 (Generacion de rutas, vistas y formulario en el frontend)
}
