package com.talissonmelo.contactapit.entity.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ContactDto {
	
	private Long id;
	
	@NotBlank(message = "Campo nome e Obrigatório.")
	private String name;

	@Email(message = "Cadastre um email válido.")
	private String email;

	@NotBlank(message = "Digite seu melhor contato.")
	private String phone;
}
