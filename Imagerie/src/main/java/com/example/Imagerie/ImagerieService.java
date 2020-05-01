package com.example.Imagerie;
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
public class ImagerieService {
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	ImagerieRepository imagerieRepository;

	@Autowired
	public ImagerieService(ImagerieRepository imagerieRepository,PatientRepository patientRepository) {
		super();
		this.imagerieRepository = imagerieRepository;
		this.patientRepository= patientRepository;
	
	}
	
	
	//-------------------------------           Liste des imagerie       ------------------------------------//
	@CrossOrigin(origins = "http://medical-service.localhost")
	@RequestMapping(value="/imageries", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK) 
	public Iterable<Imagerie> getListOfImagerie(){
						return this.imagerieRepository.findAll();
	}//fonctionne
	
	//------------------------afficher tout le patient d'un rensezvous-------------------//
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/ImageriePatient/{id}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Patient getPatientConsultation(@PathVariable("id") int id) {
			Imagerie c = this.imagerieRepository.findById(id);
			return c.getPatient();
		}




@CrossOrigin(origins = "http://medical-service.localhost")
@RequestMapping(value = "/PrendreImagerie", method = RequestMethod.POST)
@ResponseStatus(HttpStatus.OK)
@ResponseBody
public void PriseRendezVOus( @RequestBody ImagerieInfo imagerieinfo) throws Exception{
	Patient p = patientRepository.findByLastname(imagerieinfo.getLastnamePatient());
	Imagerie m = new Imagerie(p ,imagerieinfo.getHeure(), imagerieinfo.getDate(), imagerieinfo.getType());
	this.imagerieRepository.save(m);
	System.out.println("rendez vous prit: "+ m.getType() + " le "+ m.getDate()+" a " +m.getHeure() +"h");
	
		
	}

  
}
