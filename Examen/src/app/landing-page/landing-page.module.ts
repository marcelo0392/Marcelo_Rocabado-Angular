import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { ContactComponent } from './contact/contact.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { TrailerComponent } from './trailer/trailer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LandingPageComponent,
    FooterComponent,
    SynopsisComponent,
    ContactComponent,
    OtherGamesComponent,
    TrailerComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LandingPageModule { }
