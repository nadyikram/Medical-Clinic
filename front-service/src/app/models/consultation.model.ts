import { User } from './user.model';
import { Medecin } from './medecin.model';


export class Consultation{
	constructor( 
				 public id: number,
	 			 public heure : string,
				 public date: string,
				 public patient: User,
				 public medecin: Medecin,
				 public type: number,
				 public tarifConsultation: number ){}
	
}