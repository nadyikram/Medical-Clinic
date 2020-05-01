package com.example.Imagerie;

import org.springframework.data.repository.CrudRepository;


public interface ImagerieRepository extends CrudRepository<Imagerie, Integer>{
	Imagerie findById(int id);
	Imagerie findByPatient(Patient patient);

}
