import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '',
    //component: AdminComponent
    redirectTo: 'card'
  },
  {
    path: 'card',
    component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
