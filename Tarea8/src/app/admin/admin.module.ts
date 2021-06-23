import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AdminComponent,
    TablesComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
