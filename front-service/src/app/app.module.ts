import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListOfDoctorsComponent } from './list-of-doctors/list-of-doctors.component';

import { MedecinService } from './services/medecin.service';
import{ AuthService} from './services/auth.service';
import{ AuthGuard} from './services/auth-guard.service';
import {ConsultationService} from './services/consultation.service';
import{UserService} from './services/user.service';
import {ImagerieService} from './services/imagerie.service';
import { DepistageService } from './services/depistage.service';
 
import { MedecinComponent } from './medecin/medecin.component';
import { AuthComponent } from './auth/auth.component';
import { MedecinViewComponent } from './medecin-view/medecin-view.component';
import { SingleMedecinComponent } from './single-medecin/single-medecin.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { RouterModule,Routes } from '@angular/router';
import { EditRendezVousComponent } from './edit-rendez-vous/edit-rendez-vous.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ListOfAppointmentComponent } from './list-of-appointment/list-of-appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SingleAppointmentComponent } from './single-appointment/single-appointment.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { EditImagerieComponent } from './edit-imagerie/edit-imagerie.component';
import { ListOfImageriesComponent } from './list-of-imageries/list-of-imageries.component';
import { ImagerieComponent } from './imagerie/imagerie.component';
import { SingleImageriesComponent } from './single-imageries/single-imageries.component';
import { ServiceImagerieComponent } from './service-imagerie/service-imagerie.component';
import { EditDepistageComponent } from './edit-depistage/edit-depistage.component';
import { ListOfDepistageComponent } from './list-of-depistage/list-of-depistage.component';
import { DepistageComponent } from './depistage/depistage.component';
import { SingleDepistageComponent } from './single-depistage/single-depistage.component';

import { ServiceConsultationComponent } from './service-consultation/service-consultation.component';
import { ServiceDepistageComponent } from './service-depistage/service-depistage.component';

const appRoutes: Routes = [
  { path: 'medecins', canActivate: [AuthGuard],component: ListOfDoctorsComponent },
  { path: 'medecins/:id', canActivate: [AuthGuard], component: SingleMedecinComponent },

  { path: 'rendez-vous', canActivate: [AuthGuard], component: EditRendezVousComponent },
  { path: 'consultations/:id', component: SingleAppointmentComponent },
  { path: 'consultations', component: ListOfAppointmentComponent },
  { path: 'ServiceConsultation', component: ServiceConsultationComponent },


  { path: 'rendez-vous-imagerie', component: EditImagerieComponent },
  { path: 'imageries', component: ListOfImageriesComponent },
  { path: 'imageries/:id', component: SingleImageriesComponent },
  { path: 'ServiceImageries', component: ServiceImagerieComponent },

  { path: 'rendez-vous-depistage', component: EditDepistageComponent },
  { path: 'depistages', component: ListOfDepistageComponent },
  { path: 'depistages/:id', component: SingleDepistageComponent },
  { path: 'ServiceDepistage', component: ServiceDepistageComponent },

  

  { path: 'user', component:UserListComponent}, 
  { path: 'new-user', component:NewUserComponent}, 
  { path: 'user-info', canActivate: [AuthGuard], component: SingleUserComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '', component: ListOfDoctorsComponent},
  { path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListOfDoctorsComponent,
    MedecinComponent,
    AuthComponent,
    MedecinViewComponent,
    SingleMedecinComponent,
    FourOhFourComponent,
    EditRendezVousComponent,
    UserListComponent,
    NewUserComponent,
    ListOfAppointmentComponent,
    AppointmentViewComponent,
    AppointmentComponent,
    SingleAppointmentComponent,
    SingleUserComponent,
    EditImagerieComponent,
    ListOfImageriesComponent,
    ImagerieComponent,
    SingleImageriesComponent,
    ServiceImagerieComponent,
    EditDepistageComponent,
    ListOfDepistageComponent,
    DepistageComponent,
    SingleDepistageComponent,
    ServiceConsultationComponent,
    ServiceDepistageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MedecinService,
    AuthService,
    ConsultationService,
    UserService,
    ImagerieService,
    DepistageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
