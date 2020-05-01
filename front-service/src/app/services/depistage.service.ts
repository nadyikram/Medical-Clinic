import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from '../models/user.model';
import { Depistage } from '../models/depistage.model';
import { DepistageInfo} from '../models/depistageInfo.model';
import { Subject} from 'rxjs/Subject';


@Injectable()
export class DepistageService {

depistageSubject = new Subject<Depistage[]>();
depistages: Depistage[]=[
{
    id: 9,
    heure: "09:00",
    date: "2020-04-14",
    patient:{
          firstname: "nada",
          lastname: "boudegzdame",
          age: 40,
          gender: "femme",
          phone: "02 33 20 30 20",
          email: "nada@gmail.com",
          motdepasse: "3jndh"
          },
    type: 'HIV',
    tarif: 30
}

];

constructor( private httpClient: HttpClient){
  this.getDepistageFromServer();
}

emitDepistageSujbect(){
	 this.depistageSubject.next(this.depistages.slice());
}


addDepistage(pname:string, date: string, heure:string, type:string){
 
  const newdep= new DepistageInfo(heure,date,pname,type);
  console.log(newdep);
  this.SaveDepistageToServer(newdep);

  this.getDepistageFromServer();

}

SaveDepistageToServer(depistage: DepistageInfo){ 
    this.httpClient.post<DepistageInfo>('http://depistage.localhost/PrendreDepistage', depistage).subscribe(
      ()=> {
      console.log('dep fait!');
      },
      (error) => {
        console.error('dep There was an error!', error)
        console.log('erreur' + error);
      }
    );
}


 getDepistageById(id: number){
    const dep: Depistage= this.depistages.find(
      (depObject) => {
       return depObject.id === id;
      }
    );

    return dep;
  }
  

getDepistageFromServer(){
		this.httpClient.get<Depistage[]>('http://depistage.localhost/depistages').subscribe(
    	(response)=> {
    		this.depistages = response;
            this.emitDepistageSujbect();
            console.log(response);
    		console.log('fait!');
    	},
    	(error) => {
    		console.log('erreur de chargement' + error);
    	}
    );
	}


getPatientFromServer(id: number){
       var x='http://depistage.localhost/DepistagePatient/';
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