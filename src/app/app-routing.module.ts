import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { LoginComponent } from './loginpage/loginpage.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'agregar-servicio', component: AgregarServicioComponent },
  { path: 'servicios-component', component: ServiciosComponent },
  { path: 'nav-bar', component: NavbarComponent },
  { path: '**', redirectTo: 'servicios-component', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
