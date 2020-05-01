import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Medecin} from '../models/medecin.model';
import { User } from '../models/user.model';
import { ConsultationService } from '../services/consultation.service';
import {MedecinService } from '../services/medecin.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.scss']
})
export class SingleAppointmentComponent implements OnInit {

  @Input() id:number;
  @Input() heure : string;
  @Input() date: string;
  @Input() patient: User;
  @Input() medecin: Medecin;
  @Input() type: number;
  @Input() tarifConsultation: number;

  constructor( private httpClient: HttpClient,private consultationService: ConsultationService, 
  				private route: ActivatedRoute , 
  				private medecinService:MedecinService) { }

  ngOnInit(){

  		const id = this.route.snapshot.params['id'];
  		this.id =id;
  		this.heure = this.consultationService.getConsultationById(+id).heure;
        this.date = this.consultationService.getConsultationById(+id).date;
        this.patient = this.consultationService.getConsultationById(+id).patient;
        this.medecin = this.consultationService.getConsultationById(+id).medecin;
        this.type = this.consultationService.getConsultationById(+id).type;
        this.tarifConsultation = this.consultationService.getConsultationById(+id).tarifConsultation;
        this.getPatient();
 
  }



 getPatient(){
       var x='http://medical-clinic.localhost/consultationPatient/';
       var y = "" + this.id;
       var z= x.concat(y);
       console.log('hehyeu',z );
   			this.httpClient.get<User>(z).subscribe(
    	(response)=> {
    		this.patient = response;
            console.log(response);
    		console.log('patient fait!');
    	},
    	(error) => {
    		console.log('erreur de patient ' + error);
    	}
    );
	
  }

 getmedecinLastName(){
	return this.medecin.lastname;
}

getmedecinFirstName(){
	return this.medecin.firstname;
}

getPatientLastName(){ 
	return this.patient.lastname;
}

GetPatientFirstName(){ 
	return this.patient.firstname;
}

}
