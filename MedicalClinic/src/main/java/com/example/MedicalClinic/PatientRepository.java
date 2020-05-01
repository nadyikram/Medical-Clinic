package com.example.MedicalClinic;

import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient, Integer> {
	Patient findByLastnameAndFirstname(String lastname, String firstname);
	Patient findByLastname(String lastname);

}
