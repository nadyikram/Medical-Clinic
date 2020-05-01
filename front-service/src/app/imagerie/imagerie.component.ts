import { Component, Input, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { UserService} from '../services/user.service';
import { ImagerieService} from '../services/imagerie.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-imagerie',
  templateUrl: './imagerie.component.html',
  styleUrls: ['./imagerie.component.scss']
})


export class ImagerieComponent implements OnInit {
	
	@Input() id: number;
	@Input() heure : string;
  @Input() date: string;
	@Input() patient: User;
	@Input() type: string;
	@Input() tarif: number;

  constructor(private httpClient: HttpClient) { 
   
   	}
   
 
  ngOnInit(){
  			this.getPatient();
  }

 getPatient(){
       var x='http://imagerie.localhost/imageriePatient/';
       var y = "" + this.id;
       var z= x.concat(y);
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

 getPatientLastName(){ 
	return this.patient.lastname;
}

GetPatientFirstName(){ 
	return this.patient.firstname;
}

}
