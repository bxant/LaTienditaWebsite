import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CATSComponent } from './cats/cats.component' 
import { NearMeComponent } from './near-me/near-me.component'

const routes: Routes = [
{ path: 'Cats', component: CATSComponent},
{ path: 'Near', component: NearMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
