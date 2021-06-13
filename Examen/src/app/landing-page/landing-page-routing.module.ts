import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { OtherGamesComponent } from './other-games/other-games.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
