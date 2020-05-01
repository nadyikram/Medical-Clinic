import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfDoctorsComponent } from './list-of-doctors/list-of-doctors.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: 'medecins', component: ListOfDoctorsComponent },
  { path: 'auth', component: AuthComponent},
  { path: '', component: ListOfDoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
