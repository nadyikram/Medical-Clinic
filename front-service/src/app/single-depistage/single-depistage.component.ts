import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { DepistageService} from '../services/depistage.service';
import { User } from "../models/user.model";

@Component({
  selector: 'app-single-depistage',
  templateUrl: './single-depistage.component.html',
  styleUrls: ['./single-depistage.component.scss']
})
export class SingleDepistageComponent implements OnInit {
  
  @Input() id:number;
  @Input() heure : string;
  @Input() date: string;
  @Input() patient: User;
  @Input() type: string;
  @Input() tarif: number;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient,private depistageService: DepistageService) { }

    ngOnInit(){
  		const id = this.route.snapshot.params['id'];
  		this.id = id;
  		this.heure = this.depistageService.getDepistageById(+id).heure;
        this.date = this.depistageService.getDepistageById(+id).date;
        this.patient = this.depistageService.getDepistageById(+id).patient;
        this.type = this.depistageService.getDepistageById(+id).type;
        this.tarif = this.depistageService.getDepistageById(+id).tarif;
        //this.getPatient();
  }


  getPatient(){
       var x='http://depistage.localhost/depistagePatient/';
       var y = "" + this.id;
       var z= x.concat(y);
       //console.log('hehyeu',z );
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
