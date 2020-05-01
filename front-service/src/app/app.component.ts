import {OnInit, OnDestroy, Component } from '@angular/core';
import { MedecinService } from './services/medecin.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import{ Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{

  title = 'Medical Service';
  imagelink="../assets/images/bar1.png/";


  constructor( private medecinService: MedecinService){}
  
  ngOnInit(){
	
	}

	ngOnDestroy(){
		
	}
}
