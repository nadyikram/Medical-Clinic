package com.example.Depistage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DepistageService {
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	DepistageRepository depistageRepository;

	@Autowired
	public DepistageService(DepistageRepository depistageRepository,PatientRepository patientRepository) {
		super();
		this.depistageRepository = depistageRepository;
		this.patientRepository= patientRepository;
	
	}
	
	
	
	//-------------------------------           Liste des imagerie       ------------------------------------//
		@CrossOrigin(origins = "http://medical-service.localhost")
		@RequestMapping(value="/depistages", method=RequestMethod.GET) 
		@ResponseStatus(HttpStatus.OK) 
		public Iterable<Depistage> getListOfDepistage(){
							return this.depistageRepository.findAll();
		}//fonctionne
		
		//------------------------afficher tout le patient d'un rensezvous-------------------//
		@CrossOrigin(origins = "http://medical-service.localhost")
		@RequestMapping(value = "/DepistagePatient/{id}", method = RequestMethod.GET)
		@ResponseStatus(HttpStatus.OK)
		@ResponseBody
		public Patient getPatientDepistage(@PathVariable("id") int id) {
			Depistage c = this.depistageRepository.findById(id);
				return c.getPatient();
			}




	@CrossOrigin(origins = "http://medical-service.localhost")
	@RequestMapping(value = "/PrendreDepistage", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public void PriseRendezVOus( @RequestBody DepistageInfo depistageInfo) throws Exception{
		Patient p = patientRepository.findByLastname(depistageInfo.getLastnamePatient());
		Depistage d = new Depistage(p ,depistageInfo.getHeure(), depistageInfo.getDate(), depistageInfo.getType());
		this.depistageRepository.save(d);
		System.out.println("rendez vous prit: "+ d.getType() + " le "+ d.getDate()+" a " +d.getHeure() +"h");
		
			
		}


}
