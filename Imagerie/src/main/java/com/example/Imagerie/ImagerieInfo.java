package com.example.Imagerie;

public class ImagerieInfo {


	private String heure;
	private String date;
	private String lastnamePatient;
	private String type;
	
	public ImagerieInfo() {
		super();
	}
	
	public ImagerieInfo(String lastnamePatient, String heure, String date, String type) {
		this.lastnamePatient = lastnamePatient;
		this.date = date;
		this.heure = heure;
		this.type = type;
		
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

	public String getLastnamePatient() {
		return lastnamePatient;
	}

	public void setLastnamePatient(String lastnamePatient) {
		this.lastnamePatient = lastnamePatient;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
