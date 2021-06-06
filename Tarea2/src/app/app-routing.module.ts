import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  {
    path: 'component1',
    component: MyComponentComponent
  },
  {
    path: 'news',
    component: Component2Component
  },
  {
    path: 'contacts',
    component: Component3Component
  },
  {
    path: 'galeria',
    component: Component4Component
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
