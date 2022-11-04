import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEspaciosComponent } from './list-espacios/list-espacios.component';
import { NewEspacioComponent } from './new-espacio/new-espacio.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'espacios',component:ListEspaciosComponent},
  {path:'add',component:NewEspacioComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
