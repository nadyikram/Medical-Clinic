import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagerieService} from '../services/imagerie.service';
import { Imagerie } from '../models/imagerie.model';
import {Subscription } from 'rxjs/Subscription';




@Component({
  selector: 'app-list-of-imageries',
  templateUrl: './list-of-imageries.component.html',
  styleUrls: ['./list-of-imageries.component.scss']
})
export class ListOfImageriesComponent implements OnInit, OnDestroy {

   imagerieSubscription: Subscription;
   imageries: Imagerie[]=[];


    constructor( private imagerieService: ImagerieService) { 
    	this.imagerieService.getImagerieFromServer();
    }



   ngOnInit() {

  		this.imagerieSubscription = this.imagerieService.imagerieSubject.subscribe(
        (imagerie: Imagerie[]) => {
    	this.imageries = imagerie;
        }
        );
    
    this.imagerieService.emitImagerieSujbect();
    
  }


ngOnDestroy(){
   this.imagerieSubscription.unsubscribe();
  }


    onFetch(){
    	this.imagerieService.getImagerieFromServer();
    }

}
