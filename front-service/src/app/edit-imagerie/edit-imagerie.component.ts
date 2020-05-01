import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { ImagerieService } from '../services/imagerie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-imagerie',
  templateUrl: './edit-imagerie.component.html',
  styleUrls: ['./edit-imagerie.component.scss']
})
export class EditImagerieComponent implements OnInit {
  
  Gtype: string;
  v: boolean=false;

  constructor(private router: Router, private imagerieService:ImagerieService) { }

  ngOnInit(): void {
  }

onSubmitf(formulaire : NgForm){
  		 
	this.Gtype = formulaire.value['Gtype'];
	this.v = true;
		
}
 getType(){
 	return this.Gtype;
 }

  onSubmit(formulaire : NgForm){
  		
  		const patientName = formulaire.value['pname'];
  		const date = formulaire.value['appointement'];
  		const heure = formulaire.value['heure'];
  		const type = formulaire.value['type'];

  		this.imagerieService.addImagerie(patientName, date, heure, type);
  		this.imagerieService.getImagerieFromServer();
  		this.router.navigate(['/imageries']);

  }
}
