package com.students.domain;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import javax.validation.Valid;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.util.Date;


public class Student {

	@Digits(integer = 6, fraction = 0, message = "This must be at most {2} digits")
	private Integer id;

	@NotEmpty
	@NotBlank
	@Size(min = 4,max = 50,message = "{Size.name.validation}")
 	private String firstName = null;


	@NotEmpty
	@NotBlank
 	private String lastName  = null;

 	@NotNull
	@Email
 	private String email = null;

 	@NotEmpty(message = "{gander.validation}")
 	private String gander = null;
	@NotNull
	@DateTimeFormat(pattern = "MM-dd-yyyy")
	// @DateTimeFormat(iso = ISO.DATE) // yyyy-MM-dd
	// @DateTimeFormat(style = "L-") // July 12, 2001
	// @DateTimeFormat(pattern="hh:mm:ss")
	@Past
    private Date birthday;

	@Valid
	private Phone phone;

  	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGander() {
		return gander;
	}
	public void setGander(String gander) {
		this.gander = gander;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public Phone getPhone() {
		return phone;
	}
	public void setPhone(Phone phone) {
		this.phone = phone;
	}

}
