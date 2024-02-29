import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TlistComponent } from './tlist/tlist.component'
import { DetailsTransactionComponent } from './details-transaction/details-transaction.component'
import { NavTimeComponent } from './nav-time/nav-time.component';

const routes: Routes = [
  { path: '', component: TlistComponent },
  { path: 'detail/:id', component: DetailsTransactionComponent },

  { path: '**', component: NavTimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
