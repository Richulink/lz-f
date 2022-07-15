import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AccesoGuard } from './guards/acceso.guard';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
   redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    component:InicioComponent,
    
  }
  ,  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: 'feed',
    component:FeedComponent,
   // canActivate: [AccesoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
