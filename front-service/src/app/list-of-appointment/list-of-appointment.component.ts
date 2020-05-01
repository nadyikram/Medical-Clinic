import { Component, OnInit, OnDestroy  } from '@angular/core';
import {Subscription } from 'rxjs/Subscription';
import { ConsultationService } from '../services/consultation.service';
import { Consultation } from '../models/consultation.model';

@Component({
  selector: 'app-list-of-appointment',
  templateUrl: './list-of-appointment.component.html',
  styleUrls: ['./list-of-appointment.component.scss']
})
export class ListOfAppointmentComponent implements OnInit, OnDestroy  {
	
	 consultationSubscription: Subscription;
     consultations: Consultation[];


  constructor( private consultationService: ConsultationService) 
  { this.consultationService.getConsultationFromServer();}


   ngOnInit() {
  this.consultationSubscription = this.consultationService.consultationSubject.subscribe(
    (consultation: Consultation[]) => {
    	this.consultations = consultation;
    }
    );
    this.consultationService.emitConsultationSujbect();
    
  }


ngOnDestroy(){
   this.consultationSubscription.unsubscribe();
  }


    onFetch(){
    	this.consultationService.getConsultationFromServer();
    }

}
