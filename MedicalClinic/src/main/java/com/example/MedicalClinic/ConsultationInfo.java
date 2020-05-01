package com.example.MedicalClinic;

public class ConsultationInfo {
	
	private String heure;
	private String date;
	private String lastnameMedecin;
	private String lastnamePatient;
	private int type;
	
	
  public ConsultationInfo() {
	  super();
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


public String getLastnameMedecin() {
	return lastnameMedecin;
}


public void setLastnameMedecin(String lastnameMedecin) {
	this.lastnameMedecin = lastnameMedecin;
}


public String getLastnamePatient() {
	return lastnamePatient;
}


public void setLastnamePatient(String lastnamePatient) {
	this.lastnamePatient = lastnamePatient;
}


public int getType() {
	return type;
}


public void setType(int type) {
	this.type = type;
}
}
