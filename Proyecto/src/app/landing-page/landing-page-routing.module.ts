import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { RespuestaComponent } from '../usuarios/respuesta/respuesta.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InstallationComponent } from './installation/installation.component';
import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RepairsComponent } from './repairs/repairs.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'aboutUs',
        component: AboutUsComponent
      },
      {
        path: 'repairs',
        component: RepairsComponent
      },
      {
        path: 'instalation',
        component: InstallationComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'resp',
        component: RespuestaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
