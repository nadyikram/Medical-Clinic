package com.example.MedicalClinic;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MedecinRepository  extends CrudRepository<Medecin, Integer>{

	List<Medecin> findBySpecialty(String specialty);
	Medecin findByLastnameAndFirstname(String lastname, String firstname);
	Medecin findByLastname(String lastname);
	

}
