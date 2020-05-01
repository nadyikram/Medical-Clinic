import { Component, OnInit, OnDestroy } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import {Subscription } from 'rxjs/Subscription';
import { Medecin } from '../models/medecin.model';


@Component({
  selector: 'app-medecin-view',
  templateUrl: './medecin-view.component.html',
  styleUrls: ['./medecin-view.component.scss']
})


export class MedecinViewComponent implements OnInit, OnDestroy {
  prixParDefaut='40';
  
  medecinSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  medecins: Medecin[];


  constructor(private medecinService: MedecinService) { }

 ngOnInit() {
  this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
    (medecins: Medecin[]) => {
    	this.medecins= medecins;
    }
    );
    this.medecinService.emitMedecinSujbect();
    //this.medecins = this.medecinService.medecins
  }
  


   onFetch(){
      this.medecinService.getMedecinFromServer()
    }


  ngOnDestroy(){
   this.medecinSubscription.unsubscribe();
  }
}
