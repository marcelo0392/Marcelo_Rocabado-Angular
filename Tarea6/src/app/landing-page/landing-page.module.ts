import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LandingPageComponent } from './landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    HelpComponent,
    LandingPageComponent,
    FooterComponent,
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
