package com.example.MedicalClinic;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Consultation {
	private int id;
	private String heure;
	private String date;
	private Medecin medecin;
	private Patient patient;
	private int type;
	//1 pour suivi
		//0 pour premiere consultation
	private int tarifConsultation;

	//Constucteur
	public Consultation() {
		super();
	}
	
	public Consultation(Medecin medecin,Patient patient, String heure, String date, int type) {
		this.medecin = medecin;
		this.patient = patient;
		this.date = date;
		this.heure = heure;
		this.type = type;
		
		if (type == 1)
			this.tarifConsultation = medecin.getTarif();
		else 
			this.tarifConsultation = (int) (medecin.getTarif()*0.9);
	}
	
	
	//Getters & Setters
	@ManyToOne(cascade=CascadeType.ALL)
	public Medecin getMedecin() {
		return medecin;
	}

	public void setMedecin(Medecin medecin) {
		this.medecin = medecin;
	}
	
	@ManyToOne
	@JsonIgnore
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
	
	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getTarifConsultation() {
		return tarifConsultation;
	}

	
	public void setTarifConsultation(int tarifConsultation) {
		this.tarifConsultation = tarifConsultation;
	}
	
	public void SetTarifConsultation() {
		if (this.type == 1)
			this.tarifConsultation = this.medecin.getTarif();
		else 
			this.tarifConsultation = (int) (this.medecin.getTarif()*0.9);
	}
}
