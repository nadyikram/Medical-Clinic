package com.example.MedicalClinic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


@SpringBootApplication
public class MedicalClinicApplication {

	public static void main(String[] args) {
		
		ConfigurableApplicationContext context = SpringApplication.run(MedicalClinicApplication.class, args);
		PersonRepository personRepository= (PersonRepository)context.getBean("personRepository");
		ConsultationRepository consultationRepository=(ConsultationRepository)context.getBean("consultationRepository");
		
		
		//remplir la base avant de lancer le Web Service
		
		
		
		Medecin m1= new Medecin("Aboubi","Razika",45,"Femme","gynécologue",30);
		Medecin m2= new Medecin("Cefil","Daoud",65,"Homme","neurologue",60);
		Medecin m3= new Medecin("Aymoun","Bouzid",45,"Homme","pédiatre",30);
		Medecin m4= new Medecin("Boudegzdame","Mohamed",65,"Homme","urologue",60);
		
		Patient patient1= new Patient("Eliaz","Foufou",23,"Femme", "0643123478","elizFoufou@gmail.com","foufoufou");
		Patient p2= new Patient("Eli","Fourid",39,"homme", "0643123478","eliFourid@gmail.com","foufoufou");
		
		Consultation c = new Consultation(m1,patient1,"12:00","23-05-2020",0);
		patient1.getConsultations().add(c);
		m1.getConsultations().add(c);
		
		Consultation c1 = new Consultation(m2,p2,"11:00","20-05-2020",0);
		p2.getConsultations().add(c1);
		m2.getConsultations().add(c1);
		
		Consultation c2 = new Consultation(m3,p2,"15:30","11-05-2020",0);
		p2.getConsultations().add(c2);
		m3.getConsultations().add(c2);
		
		Consultation c3 = new Consultation(m4,patient1,"15:30","11-05-2020",0);
		patient1.getConsultations().add(c3);
		m4.getConsultations().add(c3);
		
		
		
		personRepository.save(patient1);
		personRepository.save(p2);
		
		
		consultationRepository.save(c);
		consultationRepository.save(c1);
		consultationRepository.save(c2);
		consultationRepository.save(c3);
		
		
	}

}
