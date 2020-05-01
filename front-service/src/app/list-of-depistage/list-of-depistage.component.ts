import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { DepistageService} from '../services/depistage.service';
import { Depistage } from '../models/depistage.model';
import {Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-list-of-depistage',
  templateUrl: './list-of-depistage.component.html',
  styleUrls: ['./list-of-depistage.component.scss']
})
export class ListOfDepistageComponent implements OnInit, OnDestroy  {

  depisatgeSubscription: Subscription;
   depistages: Depistage[]=[];

  constructor(private depistageService: DepistageService) { 
    	this.depistageService.getDepistageFromServer();
  }

  ngOnInit() {

  		this.depisatgeSubscription = this.depistageService.depistageSubject.subscribe(
        (depistage: Depistage[]) => {
    	this.depistages = depistage;
        }
        );
    
    this.depistageService.emitDepistageSujbect();
  }


ngOnDestroy(){
   this.depisatgeSubscription.unsubscribe();
  }


    onFetch(){
    	this.depistageService.getDepistageFromServer();
    }

}
