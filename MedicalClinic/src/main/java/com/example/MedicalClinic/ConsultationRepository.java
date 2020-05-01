package com.example.MedicalClinic;

import org.springframework.data.repository.CrudRepository;

public interface ConsultationRepository extends CrudRepository<Consultation, Integer>{
	
	Consultation findById(int id);
	Consultation findByMedecin(Medecin medecin);
	Consultation findByPatient(Patient patient);
	
	
	void deleteByMedecin(Medecin medecin);
	void deleteByPatient(Patient patient);
}
