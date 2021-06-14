import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { RegisterComponent } from './register/register.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { TrailerComponent } from './trailer/trailer.component';

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
        path: 'synopsis',
        component: SynopsisComponent
      },
      {
        path: 'otherGames',
        component: OtherGamesComponent
      },
      {
        path: 'trailer',
        component: TrailerComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
