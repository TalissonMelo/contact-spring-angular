package com.talissonmelo.contactapit.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.talissonmelo.contactapit.entity.Contact;
import com.talissonmelo.contactapit.entity.dto.ContactDto;
import com.talissonmelo.contactapit.repository.ContactRepository;
import com.talissonmelo.contactapit.service.ContactService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/contacts")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ContactController {

	private final ContactRepository repository;
	private final ContactService service;
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Contact save(@Valid @RequestBody ContactDto contactdto) {
		return service.save(contactdto);
	}
	
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
	
	@GetMapping
	public List<Contact> findAll(){
		return repository.findAll();
	}
	
	@PatchMapping(value = "/{id}/favorite")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void favorite(@PathVariable Long id) {
		service.favorite(id);
	}
	
	@PatchMapping(value = "/{id}/remove-favorite")
	public void resetFavorite(@PathVariable Long id) {
		service.resetFavorite(id);
	}
}
