import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { ConsultationService } from '../services/consultation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-rendez-vous',
  templateUrl: './edit-rendez-vous.component.html',
  styleUrls: ['./edit-rendez-vous.component.scss']
})
export class EditRendezVousComponent implements OnInit{

  typeRendezVous: string='Premier rendez-vous';
  
  constructor( private consultationService:ConsultationService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire : NgForm){

  		const medecinName = formulaire.value['dname'];
  		const patientName = formulaire.value['pname'];
  		const date = formulaire.value['appointement'];
  		const heure = formulaire.value['heure'];
  		const specialite = formulaire.value['specialite'];
  		const type = formulaire.value['type'];

  		this.consultationService.addConsultation(medecinName,patientName, date, heure, type);
  		this.router.navigate(['/consultations']);

  }


}
