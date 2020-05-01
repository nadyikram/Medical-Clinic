package com.example.MedicalClinic;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, Integer>{
	
	Person findByLastname(String lastname);
	void deleteByLastname(String lastname);
	
	
}
