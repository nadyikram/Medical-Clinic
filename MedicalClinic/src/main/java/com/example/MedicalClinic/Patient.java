package com.example.MedicalClinic;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

@Entity
public class Patient extends Person{
	
	private String phone;
	private String email;
	private String motdepasse;
	private List<Consultation> consultations = new ArrayList<Consultation>();
	
	
	
	//Constructeur
	public Patient() {
		super();
	}
	
	public Patient(String name,String firstname,int age, String sex,String PhoneNumber,String adress, String motdepasse) {
		super(name, firstname, age,  sex);
		this.phone = PhoneNumber;
		this.email = adress;
		this.motdepasse =motdepasse;
	}
	
	public String getMotdepasse() {
		return motdepasse;
	}
	public void setMotdepasse(String motdepasse) {
		this.motdepasse = motdepasse;
	}
	//Getters & Setters
	@OneToMany(mappedBy="patient", cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	public List<Consultation> getConsultations() {
		return consultations;
	}
	public void setConsultations(List<Consultation> consultations) {
		this.consultations = consultations;
	}
	
	
	
	public String getPhone() {
		return phone;
	}

	public void setPhone(String PhoneNumber) {
		this.phone = PhoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String adress) {
		this.email = adress;
	}
	
	

}
