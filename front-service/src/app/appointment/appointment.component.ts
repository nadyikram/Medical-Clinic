import { Component, Input, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { Medecin } from "../models/medecin.model";
import { UserService} from '../services/user.service';
import { MedecinService } from '../services/medecin.service';
import { ConsultationService } from '../services/consultation.service';
import {HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
	
	@Input() id: number;
	@Input() heure : string;
  @Input() date: string;
	@Input() patient: User;
	@Input() medecin: Medecin;
	@Input() type: number;
	@Input() tarifConsultation: number=40;
  @Input() pname : string;
  @Input() plname : string;


   constructor(private httpClient: HttpClient, private userService:UserService, private medecinService:MedecinService) { 
      
   
   	}
   
 

  ngOnInit(){
  			this.getPatient();
  }

 getPatient(){
       var x='http://medical-clinic.localhost/consultationPatient/';
       var y = "" + this.id;
       var z= x.concat(y);
      // console.log('hehyeu',z );
   			this.httpClient.get<User>(z).subscribe(
    	(response)=> {
    		this.patient = response;
        this.pname= response.firstname;
        this.plname = response.lastname;
        console.log(response);
    		console.log('patient fait!');
    	},
    	(error) => {
    		console.log('erreur de patient ' + error);
    	}
    );
	
  }

 getPatientLastName(){ 
	return this.plname;
}

GetPatientFirstName(){ 
	return this.pname;
}

}
