package com.example.MedicalClinic;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Iterator;
import java.util.List;


@RestController
public class MedicalService {
	
	@Autowired
	PersonRepository personRepository;
	
	@Autowired
	ConsultationRepository consultationRepository;
	
	@Autowired
	MedecinRepository medecinRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	public MedicalService(PersonRepository personRepository,ConsultationRepository consultationRepository,MedecinRepository medecinRepository,PatientRepository patientRepository) {
		super();
		this.consultationRepository = consultationRepository;
		this.personRepository = personRepository;
		this.medecinRepository = medecinRepository;
		this.patientRepository= patientRepository;
		
	}
//-------------------------------           Liste des personnes       ------------------------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value="/personnes", method=RequestMethod.GET) 
@ResponseStatus(HttpStatus.OK) 
public Iterable<Person> getListOfPerson(){
		return personRepository.findAll();
}
		
//-------------------------------           Liste des consultations       ------------------------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value="/consultations", method=RequestMethod.GET) 
@ResponseStatus(HttpStatus.OK) 
public Iterable<Consultation> getListOfConsultation(){
					return consultationRepository.findAll();
}//fonctionne

				
//***********************************************				MEDECIN			*****************************************************************//			
//--------------------------------    Retourner la liste des medecin  ----------------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/medecins", method = RequestMethod.GET)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public Iterable<Medecin> getListOfDoctor(){
						
		return medecinRepository.findAll();
	}//fonctionne

//--------------------------------    Retourner les medecin d'un specialite ----------------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/medecin/{specialty}", method = RequestMethod.GET)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public List<Medecin> getDoctorOfSpecialty(@PathVariable("specialty") String specialty) throws Exception{
				
					return medecinRepository.findBySpecialty(specialty);
	}//fonctionne


@RequestMapping(value = "/medecin/{lastname}", method = RequestMethod.GET)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public Medecin getDoctorByName(@PathVariable("lastname") String lastname) throws Exception{
				
					return medecinRepository.findByLastname(lastname);
	}



//-------------------------------------afficher tout les rendezvous d'un medecin
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/consultationsMedecin/{lastname}&{firstname}", method = RequestMethod.GET)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public List<Consultation> getConsultationOfMedecin(@PathVariable("lastname") String lastname,@PathVariable("firstname") String firstname) {
		Medecin m= medecinRepository.findByLastnameAndFirstname(lastname,firstname);
		return m.getConsultations();
	}




//***********************************************				Patient			*****************************************************************//	
//------------------------------afficher tous les patients----------------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value="/patients", method=RequestMethod.GET) 
@ResponseStatus(HttpStatus.OK) 
public Iterable<Patient> getListOfPatient(){
				return patientRepository.findAll();
	}



//------------------------afficher tout les rendezvous d'un patient-------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/consultationsPatient/{lastname}&{firstname}", method = RequestMethod.GET)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public List<Consultation> getConsultationOfPatient(@PathVariable("lastname") String lastname,@PathVariable("firstname") String firstname) {
		Patient p= patientRepository.findByLastnameAndFirstname(lastname,firstname);
		return p.getConsultations();
	}


//------------------------afficher tout le patient d'un rensezvous-------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/consultationPatient/{id}", method = RequestMethod.GET)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public Patient getPatientConsultation(@PathVariable("id") int id) {
		Consultation c = this.consultationRepository.findById(id);
		return c.getPatient();
	}
//---------------------------------Ajout Patient---------------------------------------//
@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/AjoutPatient", method = RequestMethod.POST)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public void AjoutPatient(@RequestBody Patient Patient) throws Exception{
	this.patientRepository.save(Patient);
}

@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/PrendreConsultation", method = RequestMethod.POST)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public void PriseRendezVOus( @RequestBody ConsultationInfo consultationinfo) throws Exception{
	
	Patient p = patientRepository.findByLastname(consultationinfo.getLastnamePatient());
	Medecin m= this.medecinRepository.findByLastname(consultationinfo.getLastnameMedecin());
	Consultation c = new Consultation(m ,p ,consultationinfo.getHeure(), consultationinfo.getDate(), consultationinfo.getType());
	
	this.consultationRepository.save(c);
	p.getConsultations().add(c);
	c.setPatient(p);
	
	System.out.println("rendez vous prit avec le medecin: " + c.getMedecin() + " le "+ c.getDate()+" a " +c.getHeure() +"h");
	
		
	}

  
}
