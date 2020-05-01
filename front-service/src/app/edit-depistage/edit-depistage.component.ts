import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { DepistageService } from '../services/depistage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-depistage',
  templateUrl: './edit-depistage.component.html',
  styleUrls: ['./edit-depistage.component.scss']
})
export class EditDepistageComponent implements OnInit {

  constructor(private router: Router, private depistageService:DepistageService) { }

  ngOnInit(): void {
  }

    onSubmit(formulaire : NgForm){
  		
  		const patientName = formulaire.value['pname'];
  		const date = formulaire.value['appointement'];
  		const heure = formulaire.value['heure'];
  		const type = formulaire.value['type'];

  		this.depistageService.addDepistage(patientName, date, heure, type);
  		this.depistageService.getDepistageFromServer();
  		this.router.navigate(['/depistages']);

  }

}
