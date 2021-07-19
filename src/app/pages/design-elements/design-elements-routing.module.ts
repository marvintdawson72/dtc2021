import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignElementsPage } from './design-elements.page';

const routes: Routes = [
  {
    path: '',
    component: DesignElementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignElementsPageRoutingModule {}
