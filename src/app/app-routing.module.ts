import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';
import { TirukComponent } from './components/tiruk/tiruk.component';

const routes: Routes = [
  {path:"1",component:TirukComponent},
  {path:"2",component:HarrypotterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
