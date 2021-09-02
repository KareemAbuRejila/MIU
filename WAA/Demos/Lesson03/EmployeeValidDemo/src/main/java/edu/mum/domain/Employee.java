package edu.mum.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.*;

import javax.validation.Valid;
import javax.validation.constraints.*;

import org.springframework.format.annotation.DateTimeFormat;

public class Employee<addressList> implements Serializable {
	private static final long serialVersionUID = -908L;

	@Digits(integer = 6, fraction = 0, message = "This must be at most {2} digits")
	private Long id;
	
	@NotEmpty // any characters including "space"
//	 @NotNull
//	 @NotBlank // must have characters BESIDES "space"
	@Size(min = 2, max = 50, message = "{Size.name.validation}") //
	private String firstName;
	
	@NotEmpty(message = "Enter the last name")
	private String lastName;

	@NotNull
	@DateTimeFormat(pattern = "MM-dd-yyyy")
	// @DateTimeFormat(iso = ISO.DATE) // yyyy-MM-dd
	// @DateTimeFormat(style = "L-") // July 12, 2001
	// @DateTimeFormat(pattern="hh:mm:ss")
	@Past
	private LocalDate birthDate;

	// @NotEmpty //Gives NO Integer validation exception
	@NotNull
	private Integer salaryLevel;

	@Valid
	private Address address;

	@Valid
	private Map< @Valid String, @Valid Address> addressList = new HashMap<>();

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public Integer getSalaryLevel() {
		return salaryLevel;
	}

	public void setSalaryLevel(Integer salaryLevel) {
		this.salaryLevel = salaryLevel;
	}

}
