package com.example.Depistage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


@SpringBootApplication
public class DepistageApplication {

	public static void main(String[] args) {
		
		ConfigurableApplicationContext context = SpringApplication.run(DepistageApplication.class, args);
		DepistageRepository depistageRepository= (DepistageRepository)context.getBean("depistageRepository");
		PatientRepository patientRepository = (PatientRepository)context.getBean("patientRepository");
		
		Patient patient1= new Patient("Eliaz","Foufou",23,"Femme", "0643123478","elizFoufou@gmail.com","foufoufou");
		Patient p2= new Patient("Eli","Fourid",39,"Homme", "0643123478","eliFourid@gmail.com","foufoufou");
		
		Depistage m = new Depistage(patient1 ,"12:45", "23-09-2020", "HIV");
		depistageRepository.save(m);
		patientRepository.save(patient1);
		Depistage m2 = new Depistage(p2 ,"15:15", "16-07-2020", "Hepatite B");
		depistageRepository.save(m2);
		patientRepository.save(p2);
		
		System.out.println("rendez vous prit: "+ m.getType() + " le "+ m.getDate()+" a " +m.getHeure() +"h");
	}

}
