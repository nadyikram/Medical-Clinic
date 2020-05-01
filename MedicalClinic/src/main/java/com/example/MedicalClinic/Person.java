package com.example.MedicalClinic;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public  class Person {
	
	private int id;
	private String lastname;
	private String firstname;
	private int age;
	private String gender;

	
	
	/*Constructeur*/
	public Person() {
		super();
	}

	public Person(String lastname,String firstname,int age, String sex) {
		super();
		this.lastname = lastname;
		this.firstname = firstname;
		this.age = age;
		this.gender = sex;
		
		
	}
	
	
	//Getters & Setters
	
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



}
