import { Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Medecin } from '../models/medecin.model'



@Injectable()
export class MedecinService implements OnInit{


medecinSubject = new Subject<Medecin[]>();

private medecins: Medecin[] = [];  

constructor(private httpClient: HttpClient){ 
                                this.getMedecinFromServer(); }


ngOnInit() {
    
  }

 switchOnAll(){
  	for(let m of this.medecins){
  		m.disponible = true;
  	}
  	this.emitMedecinSujbect();
  	
  }

  switchOffAll(){
  	for(let m of this.medecins){
  		m.disponible = false;
  	}
  	this.emitMedecinSujbect();

  }

switchOnOne(index: number){
  	this.medecins[index].disponible = true;
  	this.emitMedecinSujbect();

  }

switchOffOne(index: number){
  	this.medecins[index].disponible = false;
  	this.emitMedecinSujbect();
  }

emitMedecinSujbect(){
	 this.medecinSubject.next(this.medecins.slice());
}


  getMedecinByLastName(lastname: string){
  	const medecin: Medecin= this.medecins.find(
  		(medecinObject) => {
  		 return medecinObject.lastname === lastname;
  		}
  	);

  	return medecin;
  }

getMedecinFromServer(){
    this.httpClient.get<Medecin[]>('http://medical-clinic.localhost/medecins').subscribe(
      (response)=> {
        this.medecins = response;
        this.emitMedecinSujbect()
        console.log(response);
        console.log('fait!');
      },
      (error) => {
        console.log('erreur de chargement' + error);
      }
    );
  }
} 