import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from '../models/user.model';
import { Imagerie } from '../models/imagerie.model';
import {ImagerieInfo} from '../models/imagerieInfo.model';

import { Subject} from 'rxjs/Subject';



@Injectable()
export class ImagerieService{

imagerieSubject = new Subject<Imagerie[]>();

imageries: Imagerie[]=[];

constructor( private httpClient: HttpClient){
  this.getImagerieFromServer();
}

emitImagerieSujbect(){
	 this.imagerieSubject.next(this.imageries.slice());
}


addImagerie (pname:string, date: string, heure:string, type:string){
 
  const newimg = new ImagerieInfo(heure,date,pname,type);
  console.log(newimg);
  this.SaveImagerieToServer(newimg);

  this.getImagerieFromServer();

}

SaveImagerieToServer(imagerie: ImagerieInfo){ 
    this.httpClient.post<ImagerieInfo>('http://imagerie.localhost/PrendreImagerie', imagerie).subscribe(
      ()=> {
      console.log('img fait!');
      },
      (error) => {
        console.error('img There was an error!', error)
        console.log('erreur' + error);
      }
    );
}


 getImagerieById(id: number){
    const img: Imagerie= this.imageries.find(
      (imgObject) => {
       return imgObject.id === id;
      }
    );

    return img;
  }
  

	getImagerieFromServer(){
		this.httpClient.get<Imagerie[]>('http://imagerie.localhost/imageries').subscribe(
    	(response)=> {
    		this.imageries = response;
        this.emitImagerieSujbect()
        console.log(response);
    		console.log('fait!');
    	},
    	(error) => {
    		console.log('erreur de chargement' + error);
    	}
    );
	}


getPatientFromServer(id: number){
       var x='http://imagerie.localhost/ImageriePatient/';
       var y = "" + id;
       var z= x.concat(y);
      this.httpClient.get<User>(z).subscribe(
      (response)=> {

            console.log(response);
            console.log('patient fait!');
        return response;
      },
      (error) => {
        console.log('erreur de patient ' + error);
      }
    );
  
  }


}