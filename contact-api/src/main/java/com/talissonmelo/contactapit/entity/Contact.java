package com.talissonmelo.contactapit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@Getter
@Setter
@Entity
public class Contact {

	@EqualsAndHashCode.Include
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String email;
	private String phone;
	private Boolean favorite;
	
	@Lob
	private byte[] photo;
	
	public void addFavorite() {
		this.favorite = true;
	}
	
	public void resetFavorite() {
		this.favorite = false;
	}
}
