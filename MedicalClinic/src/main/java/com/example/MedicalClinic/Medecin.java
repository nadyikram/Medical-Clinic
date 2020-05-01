package com.example.MedicalClinic;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Medecin extends Person{
	private String specialty;
	private int tarif;
	private boolean disponible;
	private List<Consultation> consultations = new ArrayList<Consultation>();
	
	//Constructeurs
	public Medecin() {
		super();
	}
	
	public Medecin(String name,String firstname,int age, String sex,String specialty, int tarif){
		super( name, firstname, age,  sex);
		this.specialty=specialty;
		this.tarif = tarif;
	}
	
	
	//Getters & Setters
	@OneToMany(mappedBy="medecin")
	@JsonIgnore
	public List<Consultation> getConsultations() {
		return consultations;
	}

	public void setConsultations(List<Consultation> consultations) {
		this.consultations = consultations;
	}

	public String getSpecialty() {
		return specialty;
	}


	public int getTarif() {
		return tarif;
	}

	public void setTarif(int tarif) {
		this.tarif = tarif;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public boolean isDisponible() {
		return disponible;
	}

	public void setDisponible(boolean disponible) {
		this.disponible = disponible;
	}


	public String aujourdhui() {
        Date date = new Date();
        	return new SimpleDateFormat("dd-MM-yyyy").format(date);
		}
	
	/*public void disponibliteMedecin() {
		String today = aujourdhui();
		List<Consultation> listconsul = this.consultations;
		Iterator<Consultation> iter = listconsul.iterator();
		boolean d = false;
		    while (iter.hasNext())
		   {
		    	if( (((Consultation)iter.next() ).getHeure().equalsIgnoreCase(consultationinfo.getHeure() ) ) 
		    		&&((Consultation)iter.next()).getDate().equalsIgnoreCase(consultationinfo.getDate()))
		    		
		    		return("rendezvous non prit, le medecin n'est pas disponible pour la date et heure souhaitee");
		      
		    }
		
	}
 */
}

