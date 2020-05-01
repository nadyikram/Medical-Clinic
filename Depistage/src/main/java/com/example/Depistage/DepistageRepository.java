package com.example.Depistage;
import org.springframework.data.repository.CrudRepository;

public interface DepistageRepository extends CrudRepository<Depistage, Integer>{
	Depistage findById(int id);
	Depistage findByPatient(Patient patient);

}
