import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  usuario = {
    email: "",
    password: ""
  }
  constructor(private authService: AuthService) { }
 

  loguearse(): void {  // el nombre de este metodo es el que se usa en el html para llamarlo
    console.log(this.usuario);

    const { email, password } = this.usuario; // destructuracion de objetos

    this.authService.register(email, password).then(res => {
          console.log("se inicio", res);// si el usuario esta logueado, muestra su email
        })
  }

  registrarse(): void {  // el nombre de este metodo es el que se usa en el html para llamarlo
    console.log(this.usuario);

    const { email, password } = this.usuario; // destructuracion de objetos

    this.authService.register(email, password).then(res => {
          console.log("se registro", res);// si el usuario esta logueado, muestra su email
        })
  }

  ngOnInit(): void {
  }

}
