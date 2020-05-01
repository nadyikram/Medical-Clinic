package com.example.Depistage;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



@Entity
public class Depistage {
	private int id;
	private String heure;
	private String date;
	private Patient patient;
	private String type;
	private int tarif;
	
	public Depistage() {
		super();
	}
	
	public Depistage(Patient patient, String heure, String date, String type) {
		this.patient = patient;
		this.date = date;
		this.heure = heure;
		this.type = type;
		this.tarif = 100;
	}
	
	@ManyToOne(cascade=CascadeType.ALL)
	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHeure() {
		return heure;
	}

	public void setHeure(String heure) {
		this.heure = heure;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}



	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getTarif() {
		return tarif;
	}

	public void setTarif(int tarif) {
		this.tarif = tarif;
	}
	
	
	

}
