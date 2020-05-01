package com.example.Depistage;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Patient {

	private int id;
	private String lastname;
	private String firstname;
	private int age;
	private String gender;
	private String phone;
	private String email;
	private String motdepasse;
	private List<Depistage> depistages = new ArrayList<Depistage>();
	
	public Patient() {
		super();
	}
	
	public Patient(String lastname,String firstname,int age, String sex,String PhoneNumber,String adress, String motdepasse) {
		super();
		this.lastname = lastname;
		this.firstname = firstname;
		this.age = age;
		this.gender = sex;
		this.phone = PhoneNumber;
		this.email = adress;
		this.motdepasse =motdepasse;
	}
	
	
	
	@OneToMany(mappedBy="patient")
	@JsonIgnore
	public List<Depistage> getDepistages() {
		return depistages;
	}

	public void setDepistages(List<Depistage> depistages) {
		this.depistages = depistages;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMotdepasse() {
		return motdepasse;
	}

	public void setMotdepasse(String motdepasse) {
		this.motdepasse = motdepasse;
	}


}
