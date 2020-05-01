import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from '../models/user.model';
import { Medecin } from '../models/medecin.model';
import { Consultation } from '../models/consultation.model';
import { UserService } from './user.service';
import {MedecinService} from './medecin.service'
import { Subject} from 'rxjs/Subject';
import {ConsultationInfo} from '../models/consultationInfo.model';



@Injectable()
export class ConsultationService{

consultationSubject = new Subject<Consultation[]>();

consultations: Consultation[]=[];

constructor( private httpClient: HttpClient, private medecinService:MedecinService, private userService:UserService){
  this.getConsultationFromServer();
}

emitConsultationSujbect(){
	 this.consultationSubject.next(this.consultations.slice());
}


addConsultation( dname:string, pname:string, dateConsult: string, heureConsult:string, type:string){
  const medecin = this.medecinService.getMedecinByLastName(dname);
  const patient = this.userService.getUserByLastName(pname);

  let x: number=0;
  if ( type === "Premiere Consultation") { x=0;}
  else { x=1;}

  const newconsul = new ConsultationInfo(heureConsult,dateConsult,pname,dname,x);
  console.log(newconsul);
  this.SaveConsultationToServer(newconsul);

  this.getConsultationFromServer();

}

SaveConsultationToServer(consultation: ConsultationInfo){ 
    this.httpClient.post<ConsultationInfo>('http://medical-clinic.localhost/PrendreConsultation', consultation).subscribe(
      ()=> {
      console.log('cons fait!');
      },
      (error) => {
        console.error('cons There was an error!', error)
        console.log('erreur' + error);
      }
    );
}


 getConsultationById(id: number){
    const consult: Consultation= this.consultations.find(
      (consultObject) => {
       return consultObject.id === id;
      }
    );

    return consult;
  }
  

	getConsultationFromServer(){
		this.httpClient.get<Consultation[]>('http://medical-clinic.localhost/consultations').subscribe(
    	(response)=> {
    		this.consultations = response;
        this.emitConsultationSujbect()
        console.log(response);
    		console.log('fait!');
    	},
    	(error) => {
    		console.log('erreur de chargement' + error);
    	}
    );
	}


getPatientFromServer(id: number){
       var x='http://medical-clinic.localhost/consultationPatient/';
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