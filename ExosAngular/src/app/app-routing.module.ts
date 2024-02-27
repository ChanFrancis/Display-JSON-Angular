import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoInputsComponent } from './exo-inputs/exo-inputs.component'
import { ExoCalculatriceComponent } from './exo-calculatrice/exo-calculatrice.component'
import { TlistComponent } from './tlist/tlist.component'
import { DetailsTransactionComponent } from './details-transaction/details-transaction.component'
import { NavTimeComponent } from './nav-time/nav-time.component';

const routes: Routes = [
  { path: 'inputs', component: ExoInputsComponent },
  { path: 'calculatrice', component: ExoCalculatriceComponent },
  { path: '', component: TlistComponent },
  { path: 'detail/:id', component: DetailsTransactionComponent },

  { path: '**', component: NavTimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
