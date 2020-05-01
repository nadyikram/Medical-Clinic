import { User } from './user.model';


export class Depistage{
	constructor( 
				 public id: number,
	 			 public heure : string,
				 public date: string,
				 public patient: User,
				 public type: string,
				 public tarif: number ){}
	
}