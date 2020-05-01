import {User } from "../models/user.model";
import {Subject} from "rxjs/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class UserService{
   private users: User[] = [
	];

   constructor(private httpClient: HttpClient){
		this.getUserFromServer();

   }
	
	userSubject = new Subject<User[]>();

	emitUsers(){
	this.userSubject.next(this.users.slice());
	}

	addUser(user: User){
		this.users.push(user);
		this.addToServer(user);
		this.emitUsers();  
	}


	getUserByLastName(lastname: string){
  	const user= this.users.find(
  		(userObject) => {
  		 return userObject.lastname === lastname;
  		}
  	);

  	return user;
  }

  addToServer(user: User){
  			this.httpClient.post('http://medical-clinic.localhost/AjoutPatient', user).subscribe(
    	()=> {
    		console.log('ajout fait!');
    	},
    	(error) => {
    		console.log('erreur d enregistrement', + error);
    	}
    );
  }
  getUserFromServer(){
		this.httpClient.get<User[]>('http://medical-clinic.localhost/patients').subscribe(
    	(response)=> {
    		this.users = response;
        this.emitUsers()
        console.log(response);
    		console.log('fait!');
    	},
    	(error) => {
    		console.log('erreur de chargement' + error);
    	}
    );
	}

	verificationUser(lastname: string, motdepasse: string ){
			const user= this.users.find(
  				(userObject) => {
  		 			return userObject.lastname === lastname 
  				}
  			);

  			if ( user.motdepasse === motdepasse ) { return true;}
  			else { return false;}

	}

}