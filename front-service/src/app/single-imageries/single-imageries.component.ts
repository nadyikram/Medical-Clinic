import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ImagerieService} from '../services/imagerie.service';
import { User } from "../models/user.model";



@Component({
  selector: 'app-single-imageries',
  templateUrl: './single-imageries.component.html',
  styleUrls: ['./single-imageries.component.scss']
})
export class SingleImageriesComponent implements OnInit {
  @Input() id:number;
  @Input() heure : string;
  @Input() date: string;
  @Input() patient: User;
  @Input() type: string;
  @Input() tarif: number;


  constructor(private route: ActivatedRoute, private httpClient: HttpClient,private imagerieService: ImagerieService) { }

  ngOnInit(){
  		const id = this.route.snapshot.params['id'];
  		this.id =id;
  		this.heure = this.imagerieService.getImagerieById(+id).heure;
        this.date = this.imagerieService.getImagerieById(+id).date;
        this.patient = this.imagerieService.getImagerieById(+id).patient;
        this.type = this.imagerieService.getImagerieById(+id).type;
        this.tarif = this.imagerieService.getImagerieById(+id).tarif;
  }


  getPatient(){
       var x='http://imagerie.localhost/imageriePatient/';
       var y = "" + this.id;
       var z= x.concat(y);
   			this.httpClient.get<User>(z).subscribe(
    	(response)=> {
    		this.patient = response;
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
