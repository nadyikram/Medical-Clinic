import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from '../models/medecin.model'



@Component({
  selector: 'app-single-medecin',
  templateUrl: './single-medecin.component.html',
  styleUrls: ['./single-medecin.component.scss']
})
export class SingleMedecinComponent implements OnInit {
	
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  specialty: string;
  tarif: number;
  disponible: boolean;
  

  constructor(private medecinService: MedecinService, private route: ActivatedRoute) { }

  ngOnInit() {
  		const name= this.route.snapshot.params['id'];
  		this.lastname = this.medecinService.getMedecinByLastName(name).lastname;
      this.firstname = this.medecinService.getMedecinByLastName(name).firstname;
      this.age = this.medecinService.getMedecinByLastName(name).age;
      this.gender = this.medecinService.getMedecinByLastName(name).gender;
      this.specialty = this.medecinService.getMedecinByLastName(name).specialty;
      this.tarif = this.medecinService.getMedecinByLastName(name).tarif;
  		this.disponible = this.medecinService.getMedecinByLastName(name).disponible;
  }

  getFirstname(){
      return this.firstname;
  }

  getLastname(){
      return this.lastname;
  }

   getAge(){
      return this.age;
  }

   getGender(){
      return this.gender;
  } 

  getSpecialty(){
      return this.specialty;
  }

   getTarif(){
      return this.tarif;
  }
   getDisponible(){
      return this.disponible;
  }
}
