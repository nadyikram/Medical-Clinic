package com.example.Imagerie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


@SpringBootApplication
public class ImagerieApplication {

	public static void main(String[] args) {
		
		ConfigurableApplicationContext context = SpringApplication.run(ImagerieApplication.class, args);
		ImagerieRepository imagerieRepository= (ImagerieRepository)context.getBean("imagerieRepository");
		PatientRepository patientRepository = (PatientRepository)context.getBean("patientRepository");
		
		Patient patient1= new Patient("Eliaz","Foufou",23,"Femme", "0643123478","elizFoufou@gmail.com","foufoufou");
		Patient p2= new Patient("Eli","Fourid",39,"Homme", "0643123478","eliFourid@gmail.com","foufoufou");
		
		Imagerie m = new Imagerie(patient1 ,"12:45", "23-09-2020", "Scanner");
		imagerieRepository.save(m);
		patientRepository.save(p2);
		
		System.out.println("rendez vous prit: "+ m.getType() + " le "+ m.getDate()+" a " +m.getHeure() +"h");
		
	}

}
